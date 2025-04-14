import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  rotate: 2,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
  transition: { type: "spring", stiffness: 300 },
};

const floatingAnimation = {
  y: ["0%", "-5%", "0%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Contact = () => {
  const facultyMembers = [
    {
      name: 'Dr. John Doe',
      phone: '+1 (123) 456-7890',
      image: '/src/components/image/s1.jpg',
      role: 'Placement Coordinator',
    },
    {
      name: 'Prof. Jane Smith',
      phone: '+1 (987) 654-3210',
      image: '/src/components/image/s2.jpg',
      role: 'Career Advisor',
    },
    {
      name: 'Dr. Emily Johnson',
      phone: '+1 (555) 123-4567',
      image: '/src/components/image/s3.jpg',
      role: 'Industry Relations',
    },
    {
      name: 'Dr. John Doe',
      phone: '+1 (123) 456-7890',
      image: '/src/components/image/s1.jpg',
      role: 'Placement Coordinator',
    },
    {
      name: 'Dr. Emily Johnson',
      phone: '+1 (555) 123-4567',
      image: '/src/components/image/s3.jpg',
      role: 'Industry Relations',
    },
    {
      name: 'Prof. Jane Smith',
      phone: '+1 (987) 654-3210',
      image: '/src/components/image/s2.jpg',
      role: 'Career Advisor',
    },
    {
      name: 'Dr. John Doe',
      phone: '+1 (123) 456-7890',
      image: '/src/components/image/s1.jpg',
      role: 'Placement Coordinator',
    },
    {
      name: 'Dr. Emily Johnson',
      phone: '+1 (555) 123-4567',
      image: '/src/components/image/s3.jpg',
      role: 'Industry Relations',
    },
    {
      name: 'Prof. Jane Smith',
      phone: '+1 (987) 654-3210',
      image: '/src/components/image/s2.jpg',
      role: 'Career Advisor',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-100 rounded-full -top-48 -left-48 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Placement Cell
      </motion.h1>

      {/* Faculty Contacts Section */}
      <div className="relative z-10">
        <motion.h2
          className="text-2xl font-semibold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Faculty Contacts
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={hoverEffect}
            >
              {/* Faculty Image */}
              <motion.div
                className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Faculty Details */}
              <h3 className="text-lg font-bold text-gray-800 mb-1">{faculty.name}</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">{faculty.role}</p>
              <p className="text-gray-600 text-sm">{faculty.phone}</p>

              {/* Contact Button */}
              <motion.button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form and Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center relative z-10">
        {/* Animated Image */}
        <motion.div
          className="flex justify-center"
          animate={floatingAnimation}
        >
          <img
            src="/src/components/image/4957136.jpg"
            alt="Contact Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md transform hover:rotate-2 transition-all duration-300"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-blue-50"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form className="space-y-5">
  {['name', 'email', 'phone', 'message'].map((field, index) => (
    <motion.div
      key={field}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.4 }}
    >
      <label htmlFor={field} className="block text-sm font-medium text-gray-600">
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </label>
      {field === 'message' ? (
        <motion.textarea
          id={field}
          rows={4}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 transition-all duration-300"
          whileFocus={{ scale: 1.02 }}
        />
      ) : (
        <motion.input
          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
          id={field}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 p-3 transition-all duration-300"
          whileFocus={{ scale: 1.02 }}
        />
      )}
    </motion.div>
  ))}

  {/* Submit Button */}
  <motion.button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{
      scale: 1.02,
      background: "linear-gradient(45deg, #3B82F6, #2563EB)",
    }}
    whileTap={{ scale: 0.98 }}
  >
    Send Message
    <motion.span
      className="ml-2"
      animate={{ x: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      ✉️
    </motion.span>
  </motion.button>
</form>

        </motion.div>
      </div>


      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-200 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Contact;