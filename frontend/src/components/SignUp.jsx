




import React, { useState } from 'react';
import { Upload, User, Mail, Lock, Briefcase, Calendar, CheckCircle, XCircle } from 'lucide-react';
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
      const response = await fetch("http://localhost:8082/api/auth/signup", {
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

  // Icon components for form fields
  const FieldIcon = ({ type }) => {
    switch (type) {
      case 'username': return <User className="w-5 h-5 text-gray-400" />;
      case 'email': return <Mail className="w-5 h-5 text-gray-400" />;
      case 'password': return <Lock className="w-5 h-5 text-gray-400" />;
      case 'companyName': return <Briefcase className="w-5 h-5 text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block w-full md:w-1/2 bg-gradient-to-br from-indigo-100 to-purple-200 p-8 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <img
              src="src/components/image/Mobile-login.png"
              alt="Sign Up Illustration"
              className="w-full h-auto max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg m-4">
              <h3 className="text-lg font-semibold text-indigo-800">Join Our Community</h3>
              <p className="text-sm text-indigo-700">Connect with professionals and grow your network</p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/2 p-8 md:p-10"
        >
          <div className="w-full max-w-md mx-auto space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
              <p className="text-gray-500 mt-2">Fill in your details to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'username', type: 'text', placeholder: 'Username', icon: 'username' },
                { id: 'companyName', type: 'text', placeholder: 'Company Name', icon: 'companyName' },
                { id: 'email', type: 'email', placeholder: 'Email', icon: 'email' },
                { id: 'password', type: 'password', placeholder: 'Password', icon: 'password' },
                { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: 'password' },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FieldIcon type={field.icon} />
                  </div>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    value={formData[field.id]}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      [field.id]: e.target.value
                    }))}
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    id: 'batch', 
                    options: ['2020-2024', '2021-2025', '2022-2026', '2023-2027'],
                    icon: <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  },
                  { 
                    id: 'status', 
                    options: ['Selected', 'Rejected'],
                    icon: formData.status === 'Selected' ? 
                      <CheckCircle className="w-5 h-5 text-green-500 absolute left-3 top-3" /> : 
                      <XCircle className="w-5 h-5 text-red-500 absolute left-3 top-3" />
                  },
                ].map((select) => (
                  <div key={select.id} className="relative">
                    {select.icon}
                    <select
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                      value={formData[select.id]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [select.id]: e.target.value }))}
                    >
                      <option value="">{select.id}</option>
                      {select.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center">
                <label className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all">
                  <div className="relative mb-3">
                    {imageAddress ? (
                      <img 
                        src={imageAddress} 
                        alt="Preview" 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-indigo-500" />
                      </div>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${imageAddress ? 'text-indigo-600' : 'text-gray-500'}`}>
                    {imageAddress ? 'Change Profile Image' : 'Upload Profile Image'}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'}`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : 'Create Account'}
              </button>
            </form>

            <div className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/login')} 
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign in
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;