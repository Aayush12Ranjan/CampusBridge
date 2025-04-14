// import React from 'react';
// import { motion } from 'framer-motion';

// // Animation variants
// const cardVariants = {
//   offscreen: {
//     y: 50,
//     opacity: 0,
//   },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const hoverEffect = {
//   scale: 1.05,
//   rotate: 2,
//   boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
//   transition: { type: "spring", stiffness: 300 },
// };

// const imageHoverEffect = {
//   scale: 1.1,
//   transition: { type: "spring", stiffness: 200 },
// };

// const floatingAnimation = {
//   y: ["0%", "-5%", "0%"],
//   transition: {
//     duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// const AlumniSuccess = () => {
//   const alumni = [
//     {
//       name: 'John Doe',
//       company: 'Google',
//       position: 'Senior Software Engineer',
//       batch: '2020',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
//       testimonial: 'The placement cell helped me secure my dream job at Google. The mock interviews and technical preparation were invaluable.',
//       linkedin: 'https://www.linkedin.com/in/johndoe',
//     },
//     {
//       name: 'Jane Smith',
//       company: 'Microsoft',
//       position: 'Product Manager',
//       batch: '2021',
//       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
//       testimonial: 'Thanks to the placement cell\'s guidance, I was able to transition from engineering to product management.',
//     },
//     {
//       name: 'Mike Johnson',
//       company: 'Amazon',
//       position: 'Cloud Architect',
//       batch: '2022',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
//       testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
//     },

//     {
//       name: 'Mike Johnson',
//       company: 'Amazon',
//       position: 'Cloud Architect',
//       batch: '2022',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
//       testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
//     },
//     {
//       name: 'Jane Smith',
//       company: 'Microsoft',
//       position: 'Product Manager',
//       batch: '2021',
//       image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
//       testimonial: 'Thanks to the placement cell\'s guidance, I was able to transition from engineering to product management.',
//     },
//     {
//       name: 'John Doe',
//       company: 'Google',
//       position: 'Senior Software Engineer',
//       batch: '2020',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
//       testimonial: 'The placement cell helped me secure my dream job at Google. The mock interviews and technical preparation were invaluable.',
//       linkedin: 'https://www.linkedin.com/in/johndoe', // Add LinkedIn profile link
//   button: '<a href="https://www.linkedin.com/in/johndoe" target="_blank"><button>View LinkedIn</button></a>' // Button for LinkedIn
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 relative overflow-hidden">
//       {/* Animated background elements */}
//       <motion.div
//         className="absolute w-96 h-96 bg-blue-100 rounded-full -top-48 -left-48 opacity-30"
//         animate={{
//           scale: [1, 1.2, 1],
//           rotate: [0, 180],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       {/* Page Title */}
//       <motion.h1
//         className="text-4xl font-bold text-center mb-12 text-blue-600"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Alumni Success Stories
//       </motion.h1>

//       {/* Alumni Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {alumni.map((alum, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300 relative"
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={cardVariants}
//             whileHover={hoverEffect}
//           >
//             {/* Alumni Image */}
//             <motion.div
//               className="w-full h-48 overflow-hidden relative"
//               whileHover={imageHoverEffect}
//             >
//               <img
//                 src={alum.image}
//                 alt={alum.name}
//                 className="w-full h-full object-cover"
//               />
//               {/* Floating Animation Overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-30 transition-opacity duration-300"
//                 animate={floatingAnimation}
//               />
//             </motion.div>

//             {/* Alumni Details */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{alum.name}</h3>
//               <p className="text-gray-600 mb-2">{alum.position}</p>
//               <p className="text-blue-600 font-medium mb-4">{alum.company}</p>
//               <p className="text-sm text-gray-500 mb-2">Batch of {alum.batch}</p>
//               <p className="text-gray-700 italic">&quot;{alum.testimonial}&quot;</p>
//             </div>

//             {/* Social Links (Optional) */}
//             <div className="p-6 pt-0 flex space-x-4">
//               <motion.a
//                 href="#"
//                 className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 <i className="fab fa-linkedin text-xl"></i>
//               </motion.a>
//               <motion.a
//                 href="#"
//                 className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 <i className="fab fa-twitter text-xl"></i>
//               </motion.a>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {alum.linkedin && (
//               <div className="p-2 pt-0">
//                 <motion.a
//                   href={alum.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition text-xs">
//                     View LinkedIn
//                   </button>
//                 </motion.a>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-3 h-3 bg-blue-200 rounded-full"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: ["0%", "100%", "0%"],
//             opacity: [0.3, 0.8, 0.3],
//           }}
//           transition={{
//             duration: Math.random() * 3 + 2,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default AlumniSuccess;





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

const imageHoverEffect = {
  scale: 1.1,
  transition: { type: "spring", stiffness: 200 },
};

const floatingAnimation = {
  y: ["0%", "-5%", "0%"],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const AlumniSuccess = () => {
  const alumni = [
    {
      name: 'John Doe',
      company: 'Google',
      position: 'Senior Software Engineer',
      batch: '2020',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      testimonial: 'The placement cell helped me secure my dream job at Google. The mock interviews and technical preparation were invaluable.',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    {
      name: 'Jane Smith',
      company: 'Microsoft',
      position: 'Product Manager',
      batch: '2021',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      testimonial: "Thanks to the placement cell's guidance, I was able to transition from engineering to product management.",
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
    {
      name: 'Mike Johnson',
      company: 'Amazon',
      position: 'Cloud Architect',
      batch: '2022',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      testimonial: 'The industry exposure and networking opportunities provided by the placement cell were crucial to my success.',
      linkedin: 'https://www.linkedin.com/in/mikejohnson',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-100 rounded-full -top-48 -left-48 opacity-30"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Alumni Success Stories
      </motion.h1>

      {/* Alumni Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumni.map((alum, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300 relative"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={hoverEffect}
          >
            {/* Alumni Image */}
            <motion.div
              className="w-full h-48 overflow-hidden relative"
              whileHover={imageHoverEffect}
            >
              <img
                src={alum.image}
                alt={alum.name}
                className="w-full h-full object-cover"
              />
              {/* Floating Animation Overlay */}
              <motion.div
                className="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-30 transition-opacity duration-300"
                animate={floatingAnimation}
              />
            </motion.div>

            {/* Alumni Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{alum.name}</h3>
              <p className="text-gray-600 mb-2">{alum.position}</p>
              <p className="text-blue-600 font-medium mb-4">{alum.company}</p>
              <p className="text-sm text-gray-500 mb-2">Batch of {alum.batch}</p>
              <p className="text-gray-700 italic">&quot;{alum.testimonial}&quot;</p>
            </div>

            {/* LinkedIn Button */}
            {alum.linkedin && (
              <div className="p-4 pt-0 flex justify-center">
                <motion.a
                  href={alum.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    View LinkedIn
                  </button>
                </motion.a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-blue-200 rounded-full"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
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

export default AlumniSuccess;

