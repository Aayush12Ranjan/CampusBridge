

// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     companyName: '',
//     password: '',
//     confirmPassword: '',
//     profileImage: null,
//     profileImagePreview: '',
//     batch: '',
//     status: '',
//   });
//   const [loading, setLoading] = useState(false); // Track the loading state
//   const [imageAddress, setImageAddress] = useState(''); // Store image address

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("username", formData.username);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("confirmPassword", formData.confirmPassword);
//     formDataToSend.append("batch", formData.batch);
//     formDataToSend.append("companyName", formData.companyName);
//     formDataToSend.append("status", formData.status);

//     if (formData.profileImage) {
//       formDataToSend.append("profileImage", formData.profileImage);
//     }

//     setLoading(true); // Start loading animation

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       setLoading(false); // Stop loading animation

//       if (response.ok) {
//         navigate("/review");
//       } else {
//         alert(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       setLoading(false); // Stop loading animation
//       alert("Network error! Please try again.");
//     }
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files?.[0]) {
//       const file = e.target.files[0];
//       setFormData((prev) => ({
//         ...prev,
//         profileImage: file,
//         profileImagePreview: URL.createObjectURL(file),
//       }));
//       setImageAddress(URL.createObjectURL(file)); // Set the image address for display
//     }
//   };

//   // Animation variants
//   const floatVariants = {
//     float: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const gradientVariants = {
//     animate: {
//       backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//       transition: {
//         duration: 15,
//         repeat: Infinity,
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative mt-4">
//       {/* Animated Background */}
//       <motion.div
//         variants={gradientVariants}
//         animate="animate"
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(-45deg,rgb(103, 134, 205), #23d5ab)",
//           backgroundSize: "400% 400%",
//         }}
//       />

//       {/* Floating Elements */}
//       <motion.div
//         variants={floatVariants}
//         animate="float"
//         className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
//       />
//       <motion.div
//         variants={floatVariants}
//         animate="float"
//         style={{ rotate: 45 }}
//         className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-lg blur-xl"
//       />

//       {/* Main Container */}
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden relative z-10 mt-4">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 h-64 md:h-auto"
//         >
//           <img
//             src="src/components/image/Mobile-login.png"
//             alt="Sign Up Illustration"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Form Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 p-6 flex items-center justify-center h-[600px] overflow-y-auto"
//         >
//           <div className="w-full max-w-md space-y-5">
//             <motion.h2
//               initial={{ y: 10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-3xl font-bold text-gray-800 text-center mt-16 mb-6"
//             >
//               Create Account
//             </motion.h2>

//             <form onSubmit={handleSubmit} className="space-y-4 mt-8">
//               {/* Input Fields */}
//               {[ 
//                 { id: 'username', type: 'text', placeholder: 'Username' },
//                 { id: 'companyName', type: 'text', placeholder: 'Company Name' },
//                 { id: 'email', type: 'email', placeholder: 'Email' },
//                 { id: 'password', type: 'password', placeholder: 'Password' },
//                 { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
//               ].map((field, index) => (
//                 <motion.div
//                   key={field.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                 >
//                   <input
//                     {...field}
//                     required
//                     className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
//                     value={formData[field.id]}
//                     onChange={(e) => setFormData(prev => ({
//                       ...prev,
//                       [field.id]: e.target.value
//                     }))}
//                   />
//                 </motion.div>
//               ))}

//               {/* Batch & Status Dropdowns */}
//               {[ 
//                 { id: 'batch', options: ['2020-2024', '2021-2025', '2022-2026', '2023-2027'] },
//                 { id: 'status', options: ['Selected', 'Rejected'] },
//               ].map((select, index) => (
//                 <motion.div key={select.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.7 + index * 0.1 }}
//                 >
//                   <select
//                     required
//                     className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
//                     value={formData[select.id]}
//                     onChange={(e) => setFormData(prev => ({ ...prev, [select.id]: e.target.value }))}>
//                     <option value="">Select {select.id}</option>
//                     {select.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                   </select>
//                 </motion.div>
//               ))}

//               {/* File Upload */}
//               <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg cursor-pointer">
//                 <Upload className="w-6 h-6 text-blue-600" />
//                 <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
//               </label>
//               {imageAddress && <p className="text-gray-500 mt-2">{imageAddress}</p>}

//               {/* Submit Button */}
//               <button 
//                 type="submit" 
//                 className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium"
//                 disabled={loading} // Disable the button when loading
//               >
//                 {loading ? "Submitting..." : "Sign Up"} {/* Loading Text */}
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     companyName: '',
//     password: '',
//     confirmPassword: '',
//     profileImage: null,
//     profileImagePreview: '',
//     batch: '',
//     status: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [imageAddress, setImageAddress] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("username", formData.username);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("confirmPassword", formData.confirmPassword);
//     formDataToSend.append("batch", formData.batch);
//     formDataToSend.append("companyName", formData.companyName);
//     formDataToSend.append("status", formData.status);

//     if (formData.profileImage) {
//       formDataToSend.append("profileImage", formData.profileImage);
//     }

//     setLoading(true);
//     // ... rest of submit logic
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files?.[0]) {
//       const file = e.target.files[0];
//       setFormData((prev) => ({
//         ...prev,
//         profileImage: file,
//         profileImagePreview: URL.createObjectURL(file),
//       }));
//       setImageAddress(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       {/* Main Container */}
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50"
//         >
//           <img
//             src="src/components/image/Mobile-login.png"
//             alt="Sign Up Illustration"
//             className="w-full h-auto max-h-[500px] object-contain"
//           />
//         </motion.div>

//         {/* Form Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 p-8 flex items-center justify-center"
//         >
//           <div className="w-full max-w-md space-y-4">
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//               Create Account
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Input Fields */}
//               {[ 
//                 { id: 'username', type: 'text', placeholder: 'Username' },
//                 { id: 'companyName', type: 'text', placeholder: 'Company Name' },
//                 { id: 'email', type: 'email', placeholder: 'Email' },
//                 { id: 'password', type: 'password', placeholder: 'Password' },
//                 { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
//               ].map((field) => (
//                 <input
//                   key={field.id}
//                   {...field}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData[field.id]}
//                   onChange={(e) => setFormData(prev => ({
//                     ...prev,
//                     [field.id]: e.target.value
//                   }))}
//                 />
//               ))}

//               {/* Dropdowns */}
//               {[ 
//                 { id: 'batch', options: ['2020-2024', '2021-2025', '2022-2026', '2023-2027'] },
//                 { id: 'status', options: ['Selected', 'Rejected'] },
//               ].map((select) => (
//                 <select
//                   key={select.id}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData[select.id]}
//                   onChange={(e) => setFormData(prev => ({ ...prev, [select.id]: e.target.value }))}
//                 >
//                   <option value="">Select {select.id}</option>
//                   {select.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                 </select>
//               ))}

//               {/* File Upload */}
//               <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
//                 <Upload className="w-6 h-6 text-gray-500 mb-2" />
//                 <span className="text-gray-600 text-sm">Upload Profile Image</span>
//                 <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
//               </label>

//               {/* Submit Button */}
//               <button 
//                 type="submit" 
//                 className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Sign Up"}
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     companyName: '',
//     password: '',
//     confirmPassword: '',
//     profileImage: null,
//     profileImagePreview: '',
//     batch: '',
//     status: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [imageAddress, setImageAddress] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append("username", formData.username);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("password", formData.password);
//     formDataToSend.append("confirmPassword", formData.confirmPassword);
//     formDataToSend.append("batch", formData.batch);
//     formDataToSend.append("companyName", formData.companyName);
//     formDataToSend.append("status", formData.status);

//     if (formData.profileImage) {
//       formDataToSend.append("profileImage", formData.profileImage);
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (response.ok) {
//         navigate("/review");
//       } else {
//         alert(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       setLoading(false);
//       alert("Network error! Please try again.");
//     }
//   };

//   const handleImageChange = (e) => {
//     if (e.target.files?.[0]) {
//       const file = e.target.files[0];
//       setFormData((prev) => ({
//         ...prev,
//         profileImage: file,
//         profileImagePreview: URL.createObjectURL(file),
//       }));
//       setImageAddress(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden gap-8 md:gap-12">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="w-full md:w-1/2 flex items-center justify-center p-8 md:pr-0"
//         >
//           <img
//             src="src/components/image/Mobile-login.png"
//             alt="Sign Up Illustration"
//             className="w-full h-auto max-h-[500px] object-contain"
//           />
//         </motion.div>

//         {/* Form Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="w-full md:w-1/2 p-8 flex items-center justify-center md:pl-0"
//         >
//           <div className="w-full max-w-md space-y-4">
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//               Create Account
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {[
//                 { id: 'username', placeholder: 'Username' },
//                 { id: 'companyName', placeholder: 'Company Name' },
//                 { id: 'email', type: 'email', placeholder: 'Email' },
//                 { id: 'password', type: 'password', placeholder: 'Password' },
//                 { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
//               ].map((field) => (
//                 <input
//                   key={field.id}
//                   type={field.type || 'text'}
//                   required
//                   placeholder={field.placeholder}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData[field.id]}
//                   onChange={(e) => setFormData(prev => ({
//                     ...prev,
//                     [field.id]: e.target.value
//                   }))}
//                 />
//               ))}

//               {[
//                 { id: 'batch', options: ['2020-2024', '2021-2025', '2022-2026', '2023-2027'] },
//                 { id: 'status', options: ['Selected', 'Rejected'] },
//               ].map((select) => (
//                 <select
//                   key={select.id}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={formData[select.id]}
//                   onChange={(e) => setFormData(prev => ({ ...prev, [select.id]: e.target.value }))}
//                 >
//                   <option value="">Select {select.id}</option>
//                   {select.options.map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                   ))}
//                 </select>
//               ))}

//               <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
//                 <Upload className="w-6 h-6 text-gray-500 mb-2" />
//                 <span className="text-gray-600 text-sm">
//                   {imageAddress ? 'Image Selected' : 'Upload Profile Image'}
//                 </span>
//                 <input
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </label>

//               <button
//                 type="submit"
//                 className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Sign Up"}
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    profileImagePreview: '',
    batch: '',
    status: '',
  });
  const [loading, setLoading] = useState(false);
  const [imageAddress, setImageAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);
    formDataToSend.append("batch", formData.batch);
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("status", formData.status);

    if (formData.profileImage) {
      formDataToSend.append("profileImage", formData.profileImage);
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        navigate("/review");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      setLoading(false);
      alert("Network error! Please try again.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        profileImagePreview: URL.createObjectURL(file),
      }));
      setImageAddress(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden gap-8 md:gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 flex items-center justify-center p-8 md:pr-0"
        >
          <img
            src="src/components/image/Mobile-login.png"
            alt="Sign Up Illustration"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/2 p-8 flex items-center justify-center md:pl-0"
        >
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'username', placeholder: 'Username' },
                { id: 'companyName', placeholder: 'Company Name' },
                { id: 'email', type: 'email', placeholder: 'Email' },
                { id: 'password', type: 'password', placeholder: 'Password' },
                { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
              ].map((field) => (
                <input
                  key={field.id}
                  type={field.type || 'text'}
                  required
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[field.id]}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    [field.id]: e.target.value
                  }))}
                />
              ))}

              {[
                { id: 'batch', options: ['2020-2024', '2021-2025', '2022-2026', '2023-2027'] },
                { id: 'status', options: ['Selected', 'Rejected'] },
              ].map((select) => (
                <select
                  key={select.id}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData[select.id]}
                  onChange={(e) => setFormData(prev => ({ ...prev, [select.id]: e.target.value }))}
                >
                  <option value="">Select {select.id}</option>
                  {select.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ))}

              <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <Upload className="w-6 h-6 text-gray-500 mb-2" />
                <span className="text-gray-600 text-sm">
                  {imageAddress ? 'Image Selected' : 'Upload Profile Image'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Sign Up"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;