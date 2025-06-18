import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditReview = () => {
  const { reviewId } = useParams(); // Gets the reviewId from URL
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const headers = { Authorization: `Bearer ${authToken}` };
        const { data } = await axios.put(`http://localhost:8082/api/review/update/${reviewId}`, { headers });
        setReview(data);
      } catch (err) {
        setError("Failed to load review");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [reviewId, authToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/review/${reviewId}`,
        review,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      navigate("/"); // Return to profile after successful update
    } catch (err) {
      setError("Failed to update review");
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!review) return <div>Review not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Review</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Experience</label>
          <textarea
            value={review.experience || ""}
            onChange={(e) => setReview({ ...review, experience: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>
        {/* Add more fields as needed based on your review structure */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditReview;