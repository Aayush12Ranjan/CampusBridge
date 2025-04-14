import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TechnicalProblems = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    float: {
      y: [0, -30, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Organized topic-wise problems
  const topics = {
    "Array & String Manipulation": [
      { question: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
      { question: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { question: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/" },
    ],
    "Two Pointers & Sliding Window": [
      { question: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
      { question: "3Sum", link: "https://leetcode.com/problems/3sum/" },
      { question: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/" },
    ],
    "Dynamic Programming": [
      { question: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
      { question: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { question: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
    ],
    "Hash Tables & Hashing": [
      { question: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
      { question: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
      { question: "Find All Anagrams in a String", link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 bg-blue-200 rounded-full blur-xl opacity-30"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-40 right-32 w-32 h-32 bg-purple-200 rounded-full blur-xl opacity-30"
        variants={floatingVariants}
        animate="float"
        style={{ y: [-10, 40, -10] }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-white bg-blue-600 py-4 rounded-xl shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Technical Problems
        </motion.h1>

        {/* Topic-wise Sections */}
        {Object.entries(topics).map(([topic, problems], index) => (
          <motion.div
            key={topic}
            className="mb-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{topic}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, idx) => (
                <motion.a
                  key={problem.question}
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">{problem.question}</span>
                    <span className="text-blue-500 text-sm">LeetCode →</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* File Upload Section */}
        <motion.div
          className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Upload Solution</h2>
          <div className="flex flex-col items-center space-y-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="border p-2 rounded-lg w-full max-w-md"
            />
            {file && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-600 mb-2">Uploaded File: {file.name}</p>
                {file.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Uploaded Preview"
                    className="w-48 h-48 object-cover rounded-lg shadow-md mx-auto"
                  />
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TechnicalProblems;