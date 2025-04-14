import React, { useState } from 'react';
import axios from 'axios';
import { Upload, X, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const ReviewModal = ({ onClose, isSelected }) => {

  const navigate=useNavigate();
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [experience, setExperience] = useState('');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills(prev => [...prev, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files].filter(file => file.type === 'application/pdf');
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
    } else {
      alert('Please upload only PDF files.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to submit a review.");
      return;
    }

    if (!skills.length || !experience.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    skills.forEach(skill => formData.append("skills[]", skill));
    formData.append("experience", experience);
    files.forEach(file => formData.append("documents", file));

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/review/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Review submitted successfully!");
      setSkills([]);
      setExperience('');
      setFiles([]);
      onClose();
    } catch (error) {
      console.error("Error submitting review:", error);
      setError(error.response?.data?.message || "Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 mt-20">
      <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative shadow-2xl border animate-slide-up">
        <div className="flex justify-center mb-4">
          <img 
            src='/src/components/image/53902.jpg'
            alt="Company Logo" 
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition"
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isSelected ? 'Share Your Success Story 🌟' : 'Share Your Experience 💼'}
          </h2>
          <button 
  onClick={() => {navigate("/");}}
 
  className="p-1 rounded-full hover:bg-gray-100 transition-all duration-300 hover:rotate-90"
>
  <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
</button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              {isSelected ? '🚀 Skills That Helped You Get Selected' : '🔧 Skills To Improve'}
            </h3>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 rounded-lg border-gray-200 shadow-sm p-2"
                placeholder="Enter a skill..."
              />
              <button
                onClick={handleAddSkill}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-blue-50 px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="text-blue-700">{skill}</span>
                  <button onClick={() => handleRemoveSkill(index)}>
                    <Trash2 className="w-4 h-4 text-blue-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">📝 Share Your Experience</label>
            <textarea 
              value={experience} 
              onChange={(e) => setExperience(e.target.value)} 
              className="w-full h-32 resize-none rounded-lg border-2 p-3"
              placeholder="Tell us about your interview experience..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">📁 Upload Supporting Documents</label>
            <input type="file" multiple onChange={handleFileChange} />
          </div>
          <button 
            onClick={handleSubmit} 
            disabled={loading} 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg"
          >
            {loading ? 'Submitting...' : '🚀 Submit Review'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;




