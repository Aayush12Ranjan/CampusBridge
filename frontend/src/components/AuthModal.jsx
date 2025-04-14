


import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ onClose, onSuccess }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    batch: '',
    status: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint = isSignUp
      ? "http://localhost:5000/api/auth/signup"
      : "http://localhost:5000/api/auth/login";

    try {
      let response, data;

      if (isSignUp) {
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

        response = await fetch(endpoint, {
          method: "POST",
          body: formDataToSend,
        });
      } else {
        response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
      }

      data = await response.json();

      if (response.ok) {
        if (!isSignUp) {
          localStorage.setItem("token", data.token);
        }

        // Check if onSuccess is a function before calling it
        if (typeof onSuccess === 'function') {
          onSuccess();
        }

        navigate("/review");
      } else {
        console.error("Error:", data.message);
        alert(data.message || "Authentication failed!");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Network error! Please try again.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        profileImage: file,
        profileImagePreview: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
     <motion.div 
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 200 }}
  className="mb-8"
>
  <motion.img 
    // src="src/components/image/login.png" 
    // alt="Logo" 
    className="h-16 cursor-pointer"
    whileHover={{ rotate: 360, scale: 1.1 }}
    transition={{ duration: 0.6 }}
  />
</motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <LayoutGroup>
          <div className="flex justify-between items-center mb-6">
            <motion.div layout className="flex items-center space-x-3">
              <motion.div
                layout
                className={`relative flex ${
                  isSignUp ? 'justify-start' : 'justify-end'
                } w-16 bg-blue-100 rounded-full p-1 cursor-pointer`}
                onClick={() => setIsSignUp(!isSignUp)}
              >
                <motion.div
                  layout
                  className="w-6 h-6 bg-blue-600 rounded-full shadow-sm"
                  transition={{ type: 'spring', stiffness: 500 }}
                />
              </motion.div>
              <motion.span 
                layout
                className="text-lg font-bold text-gray-700"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </motion.span>
            </motion.div>
            
            <motion.button 
  onClick={() => navigate("/")}
  className="text-gray-500 hover:text-gray-700 text-xl"
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
>
  ×
</motion.button>

          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="username"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.username}
                    onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="companyName"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <input
                    type="text"
                    placeholder="Company Name"
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.companyName}
                    onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div layout>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </motion.div>

            <motion.div layout>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="confirmPassword"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.confirmPassword}
                    onChange={e => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="batch"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <select
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.batch}
                    onChange={e => setFormData(prev => ({ ...prev, batch: e.target.value }))}
                  >
                    <option value="" disabled>Select Batch</option>
                    <option value="2020-2024">2020-2024</option>
                    <option value="2021-2025">2021-2025</option>
                    <option value="2022-2026">2022-2026</option>
                    <option value="2023-2027">2023-2027</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="status"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <select
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.status}
                    onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
                  >
                    <option value="" disabled>Select Status</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            {isSignUp && (
              <motion.div 
                layout
                className="space-y-2"
              >
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-md cursor-pointer hover:bg-blue-50 transition-colors"
                >
                  <Upload className="w-6 h-6 mb-2 text-blue-600" />
                  <span className="text-sm text-gray-600">
                    {formData.profileImage ? formData.profileImage.name : 'Upload Profile Image'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </motion.label>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </motion.button>
          </form>

          <motion.div 
            layout
            className="mt-4 text-center text-sm text-gray-600"
          >
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:underline"
            >
              {isSignUp ? 
                'Already have an account? Sign In' : 
                "Don't have an account? Sign Up"
              }
            </button>
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </div>
  );
};

// Add default props to avoid errors if onSuccess is not provided
AuthModal.defaultProps = {
  onSuccess: () => {},
};

export default AuthModal;


