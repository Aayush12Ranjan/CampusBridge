
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.warn("No token found. Redirecting to login...");
//           navigate("/login");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);

//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user-specific reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );

//   if (!user)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-gray-500 text-lg">User not found.</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img
//           src={user.profileImage || "/default-profile.png"}
//           alt="Profile"
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md"
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user.username}</h1>
//         <p className="text-gray-600">{user.email}</p>
//         {user.batch && <p className="text-sm text-gray-500">Batch: {user.batch}</p>}
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li
//                 key={review._id}
//                 className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
//               >
//                 <h4 className="text-lg font-semibold text-blue-600">Experience</h4>
//                 <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

//                 {review.skills?.length > 0 && (
//                   <div className="mt-2">
//                     <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                     <div className="flex flex-wrap gap-2 mt-1">
//                       {review.skills.map((skill, index) => (
//                         <span
//                           key={index}
//                           className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReview, setEditingReview] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.warn("No token found.");
//           return;
//         }
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReview(review._id);
//     setUpdatedExperience(review.experience);
//   };

//   const handleUpdate = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       const { data: updatedReview } = await axios.put(
//         `http://localhost:5000/api/review/${reviewId}`,
//         { experience: updatedExperience },
//         { headers }
//       );
//       setUserReviews(
//         userReviews.map((review) => (review._id === reviewId ? updatedReview : review))
//       );
//       setEditingReview(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading)
//     return <div className="text-center mt-20">Loading...</div>;

//   if (error)
//     return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img src={user?.profileImage || "/default-profile.png"} alt="Profile" className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReview === review._id ? (
//                   <textarea
//                     value={updatedExperience}
//                     onChange={(e) => setUpdatedExperience(e.target.value)}
//                     className="w-full p-2 border rounded-md"
//                   />
//                 ) : (
//                   <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>
//                 )}
//                 <div className="mt-2 flex space-x-4">
//                   {editingReview === review._id ? (
//                     <button
//                       onClick={() => handleUpdate(review._id)}
//                       className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(review)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReview, setEditingReview] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };
        
//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReview(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills(review.skills || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = {
//         experience: updatedExperience,
//         skills: updatedSkills,
//       };

//       const { data: updatedReview } = await axios.put(
//         `http://localhost:5000/api/review/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? updatedReview : review)));
//       setEditingReview(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading)
//     return <div className="text-center mt-20">Loading...</div>;

//   if (error)
//     return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img src={user?.profileImage || "/default-profile.png"} alt="Profile" className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReview === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>
//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 )}
//                 <div className="mt-2 flex space-x-4">
//                   {editingReview === review._id ? (
//                     <button
//                       onClick={() => handleUpdate(review._id)}
//                       className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(review)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDelete(review._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };
        
//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = { experience: updatedExperience, skills: updatedSkills };

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img 
//           src={user?.profileImage || "/default-profile.png"} 
//           alt="Profile" 
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" 
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>
//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(review)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;




// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };
        
//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = { experience: updatedExperience, skills: updatedSkills };

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img 
//           src={user?.profileImage || "/default-profile.png"} 
//           alt="Profile" 
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" 
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>
                    
//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Display PDF */}
//                     {review.pdfUrl && (
//                       <div className="mt-3">
//                         <h4 className="text-lg font-semibold text-gray-800">Attached PDF</h4>
//                         <iframe 
//                           src={review.pdfUrl} 
//                           className="w-full h-64 border rounded-md" 
//                           title="PDF Preview"
//                         />
//                         <a 
//                           href={review.pdfUrl} 
//                           target="_blank" 
//                           rel="noopener noreferrer" 
//                           className="text-blue-500 underline mt-2 inline-block"
//                         >
//                           View PDF
//                         </a>
//                       </div>
//                     )}

//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(review)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = { experience: updatedExperience, skills: updatedSkills };

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img 
//           src={user?.profileImage || "/default-profile.png"} 
//           alt="Profile" 
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" 
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Display only PDF links */}
//                     {review.documents && review.documents.length > 0 && (
//                       <div className="mt-3">
//                         <h4 className="text-lg font-semibold text-gray-800">Attached PDFs</h4>
//                         {review.documents.map((doc) => (
//                           <div key={doc._id} className="mt-2">
//                             <a 
//                               href={doc.url} 
//                               target="_blank" 
//                               rel="noopener noreferrer" 
//                               className="text-blue-500 underline mt-2 inline-block"
//                             >
//                               {doc.filename}
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;



// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = { experience: updatedExperience, skills: updatedSkills };

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img 
//           src={user?.profileImage || "/default-profile.png"} 
//           alt="Profile" 
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" 
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Display PDF documents */}
//                     {review.documents && review.documents.length > 0 && (
//                       <div className="mt-3">
//                         <h4 className="text-lg font-semibold text-gray-800">Attached PDFs</h4>
//                         {review.documents.map((doc) => (
//                           <div key={doc._id} className="mt-2">
//                             <iframe
//                               src={doc.url}
//                               className="w-full h-64 border rounded-md"
//                               title={`PDF Preview - ${doc.filename}`}
//                             />
//                             <a
//                               href={doc.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-500 underline mt-2 inline-block"
//                             >
//                               {doc.filename}
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(review)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };

//         // Fetch user profile
//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         // Fetch user reviews
//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       const updatedReviewData = { experience: updatedExperience, skills: updatedSkills };

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         updatedReviewData,
//         { headers }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img 
//           src={user?.profileImage || "/default-profile.png"} 
//           alt="Profile" 
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md" 
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Display PDF documents as links only */}
//                     {review.documents && review.documents.length > 0 && (
//                       <div className="mt-3">
//                         <h4 className="text-lg font-semibold text-gray-800">Attached PDFs</h4>
//                         <div className="mt-2">
//                           {review.documents.map((doc) => (
//                             <div key={doc._id} className="mt-1">
//                               <a
//                                 href={doc.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 underline"
//                               >
//                                 {doc.filename}
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(review)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;




// import { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [userReviews, setUserReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingReviewId, setEditingReviewId] = useState(null);
//   const [updatedExperience, setUpdatedExperience] = useState("");
//   const [updatedSkills, setUpdatedSkills] = useState([]);
//   const [updatedDocuments, setUpdatedDocuments] = useState([]); // New state for documents

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return console.warn("No token found.");
//         const headers = { Authorization: `Bearer ${token}` };

//         const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
//         setUser(currentUser);
//         if (!currentUser?._id) throw new Error("Invalid user data received");

//         const { data: reviewsResponse } = await axios.get(
//           `http://localhost:5000/api/review/user/${currentUser._id}`,
//           { headers }
//         );
//         setUserReviews(reviewsResponse.reviews || []);
//       } catch (err) {
//         console.error("Error fetching profile data:", err);
//         setError("Failed to load profile. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
//       setUserReviews(userReviews.filter((review) => review._id !== reviewId));
//     } catch (err) {
//       console.error("Error deleting review:", err);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditingReviewId(review._id);
//     setUpdatedExperience(review.experience);
//     setUpdatedSkills([...review.skills] || []);
//     setUpdatedDocuments([...(review.documents || [])]); // Initialize with existing documents
//   };

//   const handleSkillChange = (index, value) => {
//     const newSkills = [...updatedSkills];
//     newSkills[index] = value;
//     setUpdatedSkills(newSkills);
//   };

//   const handleDocumentChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUpdatedDocuments((prevDocs) => [...prevDocs, ...files]); // Add new files to the list
//   };

//   const removeDocument = (index) => {
//     setUpdatedDocuments((prevDocs) => prevDocs.filter((_, i) => i !== index));
//   };

//   const handleUpdate = async (reviewId) => {
//     if (!updatedExperience.trim() || updatedSkills.length === 0) {
//       alert("Experience and skills cannot be empty.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };

//       // Use FormData to handle file uploads
//       const formData = new FormData();
//       formData.append("experience", updatedExperience);
//       formData.append("skills", JSON.stringify(updatedSkills)); // Send skills as JSON string
//       updatedDocuments.forEach((doc, index) => {
//         if (doc instanceof File) {
//           formData.append("documents", doc); // Append new files
//         } else {
//           formData.append(`existingDocs[${index}]`, JSON.stringify(doc)); // Keep existing docs
//         }
//       });

//       const { data } = await axios.put(
//         `http://localhost:5000/api/review/update/${reviewId}`,
//         formData,
//         { headers: { ...headers, "Content-Type": "multipart/form-data" } }
//       );

//       setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
//       setEditingReviewId(null);
//     } catch (err) {
//       console.error("Error updating review:", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
//         <img
//           src={user?.profileImage || "/default-profile.png"}
//           alt="Profile"
//           className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md"
//         />
//         <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>

//       <div className="mt-8 w-full max-w-3xl px-4">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
//         {userReviews.length > 0 ? (
//           <ul className="space-y-4">
//             {userReviews.map((review) => (
//               <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
//                 {editingReviewId === review._id ? (
//                   <>
//                     <textarea
//                       value={updatedExperience}
//                       onChange={(e) => setUpdatedExperience(e.target.value)}
//                       className="w-full p-2 border rounded-md"
//                     />
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {updatedSkills.map((skill, index) => (
//                           <input
//                             key={index}
//                             value={skill}
//                             onChange={(e) => handleSkillChange(index, e.target.value)}
//                             className="border rounded-md p-1 text-sm"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                     <div className="mt-2">
//                       <h4 className="text-lg font-semibold text-gray-800">Documents</h4>
//                       <div className="mt-1">
//                         {updatedDocuments.map((doc, index) => (
//                           <div key={index} className="flex items-center space-x-2 mt-1">
//                             <span>{doc.filename || doc.name}</span>
//                             <button
//                               onClick={() => removeDocument(index)}
//                               className="text-red-500 hover:text-red-700"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         ))}
//                         <input
//                           type="file"
//                           multiple
//                           accept=".pdf"
//                           onChange={handleDocumentChange}
//                           className="mt-2"
//                         />
//                       </div>
//                     </div>
//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleUpdate(review._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditingReviewId(null)}
//                         className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

//                     {review.skills?.length > 0 && (
//                       <div className="mt-2">
//                         <h4 className="text-lg font-semibold text-green-600">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mt-1">
//                           {review.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {review.documents && review.documents.length > 0 && (
//                       <div className="mt-3">
//                         <h4 className="text-lg font-semibold text-gray-800">Attached PDFs</h4>
//                         <div className="mt-2">
//                           {review.documents.map((doc) => (
//                             <div key={doc._id} className="mt-1">
//                               <a
//                                 href={doc.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 underline"
//                               >
//                                 {doc.filename}
//                               </a>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="mt-2 flex space-x-4">
//                       <button
//                         onClick={() => handleEdit(review)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(review._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No reviews found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;




import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [updatedExperience, setUpdatedExperience] = useState("");
  const [updatedSkills, setUpdatedSkills] = useState([]);
  const [updatedDocuments, setUpdatedDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return console.warn("No token found.");
        const headers = { Authorization: `Bearer ${token}` };

        const { data: currentUser } = await axios.get("http://localhost:5000/api/auth/profile", { headers });
        setUser(currentUser);
        if (!currentUser?._id) throw new Error("Invalid user data received");

        const { data: reviewsResponse } = await axios.get(
          `http://localhost:5000/api/review/user/${currentUser._id}`,
          { headers }
        );
        setUserReviews(reviewsResponse.reviews || []);
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError("Failed to load profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (reviewId) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      await axios.delete(`http://localhost:5000/api/review/delete/${reviewId}`, { headers });
      setUserReviews(userReviews.filter((review) => review._id !== reviewId));
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  const handleEdit = (review) => {
    setEditingReviewId(review._id);
    setUpdatedExperience(review.experience);
    setUpdatedSkills([...review.skills]); // Copy skills array directly
    setUpdatedDocuments([...(review.documents || [])]);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...updatedSkills];
    newSkills[index] = value;
    setUpdatedSkills(newSkills);
  };

  const addSkill = () => {
    setUpdatedSkills([...updatedSkills, ""]); // Add an empty skill input
  };

  const removeSkill = (index) => {
    setUpdatedSkills(updatedSkills.filter((_, i) => i !== index));
  };

  const handleDocumentChange = (e) => {
    const files = Array.from(e.target.files);
    setUpdatedDocuments((prevDocs) => [...prevDocs, ...files]);
  };

  const removeDocument = (index) => {
    setUpdatedDocuments((prevDocs) => prevDocs.filter((_, i) => i !== index));
  };

  const handleUpdate = async (reviewId) => {
    if (!updatedExperience.trim() || updatedSkills.length === 0) {
      alert("Experience and skills cannot be empty.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const formData = new FormData();
      formData.append("experience", updatedExperience);
      formData.append("skills", JSON.stringify(updatedSkills)); // Send skills as JSON string
      updatedDocuments.forEach((doc, index) => {
        if (doc instanceof File) {
          formData.append("documents", doc); // Append new files
        } else {
          formData.append(`existingDocs[${index}]`, JSON.stringify(doc)); // Keep existing docs
        }
      });

      const { data } = await axios.put(
        `http://localhost:5000/api/review/update/${reviewId}`,
        formData,
        { headers: { ...headers, "Content-Type": "multipart/form-data" } }
      );

      setUserReviews(userReviews.map((review) => (review._id === reviewId ? data.review : review)));
      setEditingReviewId(null);
    } catch (err) {
      console.error("Error updating review:", err);
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <img
          src={user?.profileImage || "/default-profile.png"}
          alt="Profile"
          className="h-24 w-24 rounded-full border-4 border-gray-200 shadow-md"
        />
        <h1 className="text-2xl font-bold mt-3 text-gray-800">{user?.username}</h1>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <div className="mt-8 w-full max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Reviews</h2>
        {userReviews.length > 0 ? (
          <ul className="space-y-4">
            {userReviews.map((review) => (
              <li key={review._id} className="bg-white p-4 rounded-lg shadow-md">
                {editingReviewId === review._id ? (
                  <>
                    <textarea
                      value={updatedExperience}
                      onChange={(e) => setUpdatedExperience(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    />
                    <div className="mt-2">
                      <h4 className="text-lg font-semibold text-green-600">Skills</h4>
                      <div className="flex flex-col gap-2 mt-1">
                        {updatedSkills.map((skill, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input
                              value={skill}
                              onChange={(e) => handleSkillChange(index, e.target.value)}
                              className="border rounded-md p-1 text-sm flex-1"
                            />
                            <button
                              onClick={() => removeSkill(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={addSkill}
                          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mt-2"
                        >
                          Add Skill
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-lg font-semibold text-gray-800">Documents</h4>
                      <div className="mt-1">
                        {updatedDocuments.map((doc, index) => (
                          <div key={index} className="flex items-center space-x-2 mt-1">
                            <span>{doc.filename || doc.name}</span>
                            <button
                              onClick={() => removeDocument(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <input
                          type="file"
                          multiple
                          accept=".pdf"
                          onChange={handleDocumentChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-4">
                      <button
                        onClick={() => handleUpdate(review._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingReviewId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700 mt-1 bg-gray-100 p-2 rounded-md">{review.experience}</p>

                    {review.skills?.length > 0 && (
                      <div className="mt-2">
                        <h4 className="text-lg font-semibold text-green-600">Skills</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {review.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {review.documents && review.documents.length > 0 && (
                      <div className="mt-3">
                        <h4 className="text-lg font-semibold text-gray-800">Attached PDFs</h4>
                        <div className="mt-2">
                          {review.documents.map((doc) => (
                            <div key={doc._id} className="mt-1">
                              <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                              >
                                {doc.filename}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-2 flex space-x-4">
                      <button
                        onClick={() => handleEdit(review)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;