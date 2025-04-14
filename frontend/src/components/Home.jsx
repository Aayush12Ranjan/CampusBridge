
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from "react-router-dom";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Sparkles, Star, Trophy, Target, Building, Briefcase, Users, BarChart } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const slides = [
    { image: 'src/components/image/placement-bg.jpg', alt: 'Hero Image 1' },
    { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80', alt: 'Hero Image 2' },
    { image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80', alt: 'Hero Image 3' }
  ];

  const placedStudents = [
    { 
      name: 'Sweety Singh', 
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
      batch: '2023 Batch',
      company: 'Google',
      role: 'Senior Developer',
      package: '₹32 LPA'
    },
    { 
      name: 'Lakki Singh', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      batch: '2022 Batch',
      company: 'Microsoft',
      role: 'Product Manager',
      package: '₹28 LPA'
    },
    { 
      name: 'Athrav Singh', 
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      batch: '2024 Batch',
      company: 'Amazon',
      role: 'Cloud Architect',
      package: '₹35 LPA'
    },
    { 
      name: 'Piyush Singh', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      batch: '2021 Batch',
      company: 'Meta',
      role: 'UX Lead',
      package: '₹40 LPA'
    },
    { 
      name: 'Rahul Rajnish', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      batch: '2023 Batch',
      company: 'Netflix',
      role: 'SDE II',
      package: '₹45 LPA'
    },
    { 
      name: 'Aayush Ranjan', 
      image: 'src/components/image/me.png',
      batch: '2024 Batch',
      company: 'Apple',
      role: 'iOS Developer',
      package: '₹38 LPA'
    }
  ];

  
  // const placementStats = [
  //   { 
  //     title: "Total Companies Visited",
  //     value: "350+",
  //     icon: <Building className="w-8 h-8" />,
  //     color: "bg-blue-100",
  //     textColor: "text-blue-600"
  //   },
   

  //   {
  //     title: "Top Recruiters",
  //     value: "FAANG+",
  //     icon: <Briefcase className="w-8 h-8" />,
  //     color: "bg-green-100",
  //     textColor: "text-green-600",
  //     logos: [
  //       "src/components/image/google.png", // Replace with the actual URL or path to the first logo
  //       "https://example.com/path-to-logo2.png"  // Replace with the actual URL or path to the second logo
  //     ]
  //   },
  //   { 
  //     title: "Placed Students",
  //     value: "5000+",
  //     icon: <Users className="w-8 h-8" />,
  //     color: "bg-purple-100",
  //     textColor: "text-purple-600"
  //   }
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [controls, inView]);

  // const chartData = {
  //   labels: ['2020', '2021', '2022', '2023', '2024'],
  //   datasets: [{
  //     label: 'Number of Placements',
  //     data: [150, 200, 180, 220, 250],
  //     backgroundColor: '#4F46E5',
  //     borderColor: '#3730A3',
  //     borderWidth: 2
  //   }]
  // };

  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: { display: false },
  //     title: { display: false }
  //   },
  //   scales: {
  //     y: { beginAtZero: true, grid: { display: false } },
  //     x: { grid: { display: false } }
  //   }
  // };

  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 1 } }
  // };

  // const slideInFromLeft = {
  //   hidden: { x: -100, opacity: 0 },
  //   visible: { x: 0, opacity: 1, transition: { duration: 1 } }
  // };

  // const slideInFromRight = {
  //   hidden: { x: 100, opacity: 0 },
  //   visible: { x: 0, opacity: 1, transition: { duration: 1 } }
  // };

  // const scaleUp = {
  //   hidden: { scale: 0.8, opacity: 0 },
  //   visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
  // };


  const placementStats = [
    { 
      title: "Total Companies Visited",
      value: "350+",
      icon: <Building className="w-8 h-8" />,
      color: "bg-blue-100",
      textColor: "text-blue-600",
      link: "/company-list"
    },
    {
      title: "Top Recruiters",
      value: "FAANG+",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-green-100",
      textColor: "text-green-600",
      logos: [
        "/images/google.png",
        "https://example.com/path-to-logo2.png"
      ]
    },
    { 
      title: "Placed Students",
      value: "5000+",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-100",
      textColor: "text-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % placementStats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Number of Placements',
      data: [150, 200, 180, 220, 250],
      backgroundColor: '#4F46E5',
      borderColor: '#3730A3',
      borderWidth: 2
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: { grid: { display: false } }
    }
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
  };
 

  return (
//     <div className="flex flex-col mt-4"> {/* Added margin-top */}
//     {/* Hero Section */}
//     <div className="relative h-[500px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <motion.div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: index === currentSlide ? 1 : 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={slide.image}
//             alt={slide.alt}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       ))}
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
//         <motion.div
//           className="max-w-3xl text-center"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-4xl font-bold mb-4">
//             Explore Our Placement Drives and Alumni Success
//           </h2>
//           <p className="text-lg">
//             Your journey to success starts here. Explore our placement drives, 
//             alumni achievements, and company visits to get inspired and prepared for your career.
//           </p>
//         </motion.div>
//       </div>
//     </div>
 
  
//       {/* Enhanced Description Section */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
//               <span className="relative z-10">Embark on a Journey Through Our Inspiring Success Stories!</span>
//               <div className="absolute -top-4 -left-6 text-blue-500 opacity-20">
//                 <Sparkles size={40} />
//               </div>
//               <div className="absolute -bottom-4 -right-6 text-blue-500 opacity-20">
//                 <Sparkles size={40} />
//               </div>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover how we turned challenges into opportunities and dreams into reality.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: <Star className="w-12 h-12" />, title: 'Excellence in Placement', description: 'Our students consistently achieve remarkable placements in top-tier companies worldwide.', color: 'text-blue-500' },
//               { icon: <Trophy className="w-12 h-12" />, title: 'Industry Recognition', description: 'Recognized for producing industry-ready professionals who make an immediate impact.', color: 'text-green-500' },
//               { icon: <Target className="w-12 h-12" />, title: 'Career Growth', description: 'Supporting continuous professional development and career advancement opportunities.', color: 'text-purple-500' }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
//                 initial="hidden"
//                 animate="visible"
//                 variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
//               >
//                 <div className={`${item.color} mb-4`}>
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards Section */}


// {/* <section className="py-16 bg-white">
//   <div className="max-w-7xl mx-auto px-4">
//     <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//       Our Placement Success: Track the Growth & Achievements
//     </h2>
//     <motion.div 
//       className="grid grid-cols-1 md:grid-cols-4 gap-8"
//       initial="hidden"
//       animate="visible"
//       ref={ref}
//     >
//       {placementStats.map((stat, index) => (
//         <motion.div
//           key={index}
//           className={`p-6 rounded-xl ${stat.color} flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow`}
//           variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
//         >
//           <div className={`mb-4 p-3 rounded-full ${stat.textColor}`}>
//             {stat.icon}
//           </div>
//           <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
//           <p className="text-gray-600">{stat.title}</p>
//         </motion.div>
//       ))}

//       <motion.div
//         className="p-6 bg-orange-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//         variants={scaleUp}
//       >
//         <div className="mb-4 flex items-center justify-center text-orange-600">
//           <BarChart className="w-8 h-8" />
//         </div>
//         <div className="h-48">
//           <Bar 
//             data={chartData} 
//             options={{
//               ...chartOptions,
//               responsive: true,
//               maintainAspectRatio: false
//             }} 
//           />
//         </div>
//         <p className="text-center mt-4 text-gray-600 font-medium">Placement Statistics</p>
//       </motion.div>
//     </motion.div>
//   </div>
// </section> */}

// <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           Our Placement Success: Track the Growth & Achievements
//         </h2>
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//         >
//           {placementStats.map((stat, index) => (
//             <motion.div
//               key={index}
//               className={`p-6 rounded-xl ${stat.color} flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow`}
//               variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
//             >
//               <div className={`mb-4 p-3 rounded-full ${stat.textColor}`}>
//                 {stat.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
//               {stat.link ? (
//   <Link to={stat.link} className="text-gray-600 hover:text-blue-500 transition font-medium">
//     {stat.title}
//   </Link>
// ) : (
//   <p className="text-gray-600">{stat.title}</p>
// )}

//             </motion.div>
//           ))}

//           <motion.div
//             className="p-6 bg-orange-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//             variants={scaleUp}
//           >
//             <div className="mb-4 flex items-center justify-center text-orange-600">
//               <BarChart className="w-8 h-8" />
//             </div>
//             <div className="h-48">
//               <Bar 
//                 data={chartData} 
//                 options={{
//                   ...chartOptions,
//                   responsive: true,
//                   maintainAspectRatio: false
//                 }} 
//               />
//             </div>
//             <p className="text-center mt-4 text-gray-600 font-medium">Placement Statistics</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>





//       {/* Wall of Fame Section */}
//       <div className="bg-gray-50 py-16 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div 
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Wall of Fame</h2>
//             <p className="text-gray-600 max-w-xl mx-auto">Celebrating the stellar achievements of our alumni</p>
//           </motion.div>

//           <div className="relative overflow-hidden py-8">
//             <motion.div 
//               className="flex gap-8"
//               animate={{
//                 x: ['0%', '-100%'],
//               }}
//               transition={{
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: 'linear',
//               }}
//               whileHover={{ animationPlayState: 'paused' }}
//             >
//               {[...placedStudents, ...placedStudents].map((student, index) => (
//                 <motion.div 
//                   key={index} 
//                   className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="relative h-60">
//                     <img
//                       src={student.image}
//                       alt={student.name}
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
//                       <h3 className="text-white font-bold text-xl mb-1">{student.name}</h3>
//                       <p className="text-gray-200 text-sm mb-2">{student.batch}</p>
//                       <div className="flex items-center space-x-2">
//                         <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
//                           {student.company}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Package:</span>
//                       <span className="text-blue-600 font-semibold">{student.package}</span>
//                     </div>
//                     <div className="mt-2 flex items-center justify-between">
//                       <span className="text-sm text-gray-600">Role:</span>
//                       <span className="text-purple-600 font-medium text-sm">{student.role}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
            
//             {/* Gradient overlays */}
//             <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
//             <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
//           </div>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               className="hidden md:block"
//               initial="hidden"
//               animate="visible"
//               variants={slideInFromLeft}
//             >
//               <img
//                 src="src/components/image/team checklist.gif"
//                 alt="Team"
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>
//             <motion.form
//               className="bg-white p-8 rounded-lg shadow-lg"
//               initial="hidden"
//               animate="visible"
//               variants={slideInFromRight}
//             >
//               <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name*"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Number*"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email*"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//                 <textarea
//                   placeholder="Write your message..."
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//                   required
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </motion.form>
//           </div>
//         </div>
//       </section>
//     </div>


<div className="flex flex-col mt-4">
  {/* Hero Section */}
  <div className="relative h-[500px] overflow-hidden">
    {slides.map((slide, index) => (
      <motion.div
        key={index}
        className={`absolute w-full h-full transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentSlide ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    ))}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white p-8">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Explore Our Placement Drives and Alumni Success
        </h2>
        <p className="text-lg">
          Your journey to success starts here. Explore our placement drives, 
          alumni achievements, and company visits to get inspired and prepared for your career.
        </p>
      </motion.div>
    </div>
  </div>

  {/* Enhanced Description Section */}
  <div className="bg-gradient-to-b from-white to-gray-50 py-20">
    <div className="px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
          <span className="relative z-10">Embark on a Journey Through Our Inspiring Success Stories!</span>
          <div className="absolute -top-4 -left-6 text-blue-500 opacity-20">
            <Sparkles size={40} />
          </div>
          <div className="absolute -bottom-4 -right-6 text-blue-500 opacity-20">
            <Sparkles size={40} />
          </div>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how we turned challenges into opportunities and dreams into reality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Star className="w-12 h-12" />, title: 'Excellence in Placement', description: 'Our students consistently achieve remarkable placements in top-tier companies worldwide.', color: 'text-blue-500' },
          { icon: <Trophy className="w-12 h-12" />, title: 'Industry Recognition', description: 'Recognized for producing industry-ready professionals who make an immediate impact.', color: 'text-green-500' },
          { icon: <Target className="w-12 h-12" />, title: 'Career Growth', description: 'Supporting continuous professional development and career advancement opportunities.', color: 'text-purple-500' }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial="hidden"
            animate="visible"
            variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
          >
            <div className={`${item.color} mb-4`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* Stats Cards Section */}
  <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Placement Success: Track the Growth & Achievements
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
        >
          {placementStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${stat.color} flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow`}
              variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
            >
              <div className={`mb-4 p-3 rounded-full ${stat.textColor}`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              {stat.link ? (
  <Link to={stat.link} className="text-gray-600 hover:text-blue-500 transition font-medium">
    {stat.title}
  </Link>
) : (
  <p className="text-gray-600">{stat.title}</p>
)}

            </motion.div>
          ))}

          <motion.div
            className="p-6 bg-orange-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            variants={scaleUp}
          >
            <div className="mb-4 flex items-center justify-center text-orange-600">
              <BarChart className="w-8 h-8" />
            </div>
            <div className="h-48">
              <Bar 
                data={chartData} 
                options={{
                  ...chartOptions,
                  responsive: true,
                  maintainAspectRatio: false
                }} 
              />
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">Placement Statistics</p>
          </motion.div>
        </motion.div>
      </div>
    </section>




  {/* Wall of Fame Section */}
  <div className="bg-gray-50 py-16 overflow-hidden">
    <div className="px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wall of Fame</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Celebrating the stellar achievements of our alumni</p>
      </motion.div>

      <div className="relative overflow-hidden py-8">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...placedStudents, ...placedStudents].map((student, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-60">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl mb-1">{student.name}</h3>
                  <p className="text-gray-200 text-sm mb-2">{student.batch}</p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {student.company}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Package:</span>
                  <span className="text-blue-600 font-semibold">{student.package}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Role:</span>
                  <span className="text-purple-600 font-medium text-sm">{student.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <section className="py-16 bg-white">
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft}
        >
          <img
            src="src/components/image/team checklist.gif"
            alt="Team"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.form
          className="bg-white p-8 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
        >
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Number*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  </section>
</div>
  );
};

export default Home;



