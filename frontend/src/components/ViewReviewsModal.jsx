import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewReviewsModal = ({ companyName, onClose }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/reviews/${companyName}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, [companyName]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{companyName} Reviews</h2>
          <button onClick={onClose} className="text-gray-500">
            ×
          </button>
        </div>
        <div>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="border p-3 rounded mb-2">
                <p>{review.review}</p>
                <p>
                  <strong>Rating:</strong> {review.rating}/5
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewReviewsModal;
