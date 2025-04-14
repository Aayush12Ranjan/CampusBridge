
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";

// export default function UserDetail() {
//   const { userId } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const reviewsApiUrl = "http://localhost:5000/api/review/all";

//   // Get logged-in user ID from localStorage or sessionStorage
//   const loggedInUserId = localStorage.getItem("userId"); // Change to sessionStorage if needed

//   useEffect(() => {
//     if (!loggedInUserId) {
//       navigate("/login"); // Redirect to login if no user is logged in
//       return;
//     }

//     if (loggedInUserId !== userId) {
//       navigate("/profile"); // Redirect to profile if user tries to access another user's details
//       return;
//     }

//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const { data } = await axios.get(reviewsApiUrl);
//         const allReviews = data.reviews || [];
//         const userReviews = allReviews.filter(
//           (review) => review.userId?._id === userId
//         );

//         if (userReviews.length > 0) {
//           setUser(userReviews[0].userId);
//           setReviews(userReviews);
//         } else {
//           setUser(null);
//           setReviews([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setUser(null);
//         setReviews([]);
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, [userId, loggedInUserId, navigate]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-20 pb-6 px-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md"
//       >
//         Go Back
//       </button>

//       {loading ? (
//         <p className="text-center text-gray-600 animate-pulse">
//           Loading user details...
//         </p>
//       ) : user ? (
//         <div className="bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
//           <div className="flex items-center gap-6 animate-fade-in">
//             <img
//               src={user.profileImage || "https://via.placeholder.com/100"}
//               alt={user.username}
//               className="h-28 w-28 rounded-full object-cover border-4 border-blue-100 shadow-md"
//             />
//             <div className="animate-slide-up">
//               <h2 className="text-3xl font-bold text-gray-800">
//                 {user.username}
//               </h2>
//               <p className="text-gray-600 mt-1">{user.email}</p>
//               {user.batch && (
//                 <p className="text-gray-500 text-sm mt-1">Batch: {user.batch}</p>
//               )}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in">
//               User Reviews
//             </h3>
//             {reviews.length > 0 ? (
//               <ul className="space-y-4">
//                 {reviews.map((review) => (
//                   <li
//                     key={review._id}
//                     className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
//                   >
//                     <div className="mb-4">
//                       <h4 className="text-lg font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
//                         Experience
//                       </h4>
//                       <p className="text-gray-700 mt-2 bg-white p-3 rounded-md shadow-inner">
//                         {review.experience}
//                       </p>
//                     </div>

//                     <div className="mb-4">
//                       <h4 className="text-lg font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
//                         Skills
//                       </h4>
//                       <div className="mt-2 flex flex-wrap gap-2">
//                         {review.skills.map((skill, index) => (
//                           <span
//                             key={index}
//                             className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:bg-green-200 animate-bounce-in"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {review.documents.length > 0 && (
//                       <div>
//                         <h5 className="text-md font-semibold text-gray-700">
//                           Documents:
//                         </h5>
//                         <ul className="list-disc pl-5 mt-2">
//                           {review.documents.map((doc) => (
//                             <li key={doc._id}>
//                               <a
//                                 href={doc.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
//                               >
//                                 {doc.filename}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500 mt-2 animate-fade-in">
//                 No reviews found.
//               </p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-red-600 animate-pulse">
//           User not found.
//         </p>
//       )}
//     </div>
//   );
// }


import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export default function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editReview, setEditReview] = useState(null);
  const [updatedExperience, setUpdatedExperience] = useState("");

  const reviewsApiUrl = "http://localhost:5000/api/review/all";
  const loggedInUserId = localStorage.getItem("userId");

  useEffect(() => {
    if (!loggedInUserId) {
      navigate("/login");
      return;
    }

    if (loggedInUserId !== userId) {
      navigate("/profile");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(reviewsApiUrl);
        const allReviews = data.reviews || [];
        const userReviews = allReviews.filter(
          (review) => review.userId?._id === userId
        );

        if (userReviews.length > 0) {
          setUser(userReviews[0].userId);
          setReviews(userReviews);
        } else {
          setUser(null);
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null);
        setReviews([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [userId, loggedInUserId, navigate]);

  // Delete review
  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5000/api/review/${reviewId}`);
      setReviews(reviews.filter((review) => review._id !== reviewId));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  // Update review
  const handleUpdate = async (reviewId) => {
    try {
      await axios.put(`http://localhost:5000/api/review/${reviewId}`, {
        experience: updatedExperience,
      });
      setReviews(
        reviews.map((review) =>
          review._id === reviewId
            ? { ...review, experience: updatedExperience }
            : review
        )
      );
      setEditReview(null);
      setUpdatedExperience("");
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-20 pb-6 px-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        Go Back
      </button>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">
          Loading user details...
        </p>
      ) : user ? (
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center gap-6 animate-fade-in">
            <img
              src={user.profileImage || "https://via.placeholder.com/100"}
              alt={user.username}
              className="h-28 w-28 rounded-full object-cover border-4 border-blue-100 shadow-md"
            />
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-800">
                {user.username}
              </h2>
              <p className="text-gray-600 mt-1">{user.email}</p>
              {user.batch && (
                <p className="text-gray-500 text-sm mt-1">Batch: {user.batch}</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in">
              User Reviews
            </h3>
            {reviews.length > 0 ? (
              <ul className="space-y-4">
                {reviews.map((review) => (
                  <li
                    key={review._id}
                    className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                  >
                    {editReview === review._id ? (
                      <div>
                        <textarea
                          value={updatedExperience}
                          onChange={(e) => setUpdatedExperience(e.target.value)}
                          className="w-full border p-2 rounded-lg"
                        />
                        <button
                          onClick={() => handleUpdate(review._id)}
                          className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditReview(null)}
                          className="mt-2 ml-2 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                            Experience
                          </h4>
                          <p className="text-gray-700 mt-2 bg-white p-3 rounded-md shadow-inner">
                            {review.experience}
                          </p>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                            Skills
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {review.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:bg-green-200 animate-bounce-in"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {review.documents.length > 0 && (
                          <div>
                            <h5 className="text-md font-semibold text-gray-700">
                              Documents:
                            </h5>
                            <ul className="list-disc pl-5 mt-2">
                              {review.documents.map((doc) => (
                                <li key={doc._id}>
                                  <a
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
                                  >
                                    {doc.filename}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mt-4 flex gap-3">
                          <button
                            onClick={() => setEditReview(review._id)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleDelete(review._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2 animate-fade-in">
                No reviews found.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-red-600 animate-pulse">
          User not found.
        </p>
      )}


      
    </div>
  );
}
