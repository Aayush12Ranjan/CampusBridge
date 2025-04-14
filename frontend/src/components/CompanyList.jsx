
// import React, { useState } from 'react';

// const companyData = [
//   { name: 'Google', logo: 'image/google.png', type: 'IT' },
//   { name: 'Amazon', logo: 'image/amazon.png', type: 'Sales' },
//   { name: 'Apple', logo: 'image/apple.png', type: 'IT' },
//   { name: 'Tesla', logo: 'image/tesla.png', type: 'Automotive' },
//   { name: 'Facebook', logo: 'image/facebook.png', type: 'Social Media' },
//   { name: 'Netflix', logo: 'image/netflix.png', type: 'Entertainment' },
// ];

// function CompanyList() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter companies based on search term
//   const filteredCompanies = companyData.filter(company =>
//     company.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Placeholder function for showing selection/rejection cards
//   const showSelectionRejectionCards = (companyName, count, selects, rejects) => {
//     console.log(`Showing cards for ${companyName}: ${count} students, Selects: ${selects}, Rejects: ${rejects}`);
//   };

//   return (
//     <div className="text-center p-6">
//       <h1 className="text-3xl font-bold mb-6">Companies that Visited</h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by company name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Company Table */}
//       <table className="w-4/5 mx-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-3 text-left border border-gray-300">Company Name</th>
//             <th className="p-3 text-left border border-gray-300">Company Logo</th>
//             <th className="p-3 text-left border border-gray-300">Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredCompanies.length > 0 ? (
//             filteredCompanies.map((company, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td
//                   onClick={() =>
//                     showSelectionRejectionCards(company.name, 50, `${company.name}s`, `${company.name}r`)
//                   }
//                   className="p-3 text-left cursor-pointer hover:bg-gray-100"
//                 >
//                   {company.name}
//                 </td>
//                 <td className="p-3">
//                   <img
//                     src={company.logo}
//                     alt={`${company.name} Logo`}
//                     className="w-12 h-auto align-middle"
//                   />
//                 </td>
//                 <td className="p-3 text-left">{company.type}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="p-3 text-center border border-gray-300">
//                 No companies found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <button
//         onClick={() => window.location.href = '/placementp.html'}
//         className="mt-6 px-6 py-3 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// }

// export default CompanyList;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const companyData = [
//   { name: 'Google', logo: 'image/google.png', type: 'IT' },
//   { name: 'Amazon', logo: 'image/amazon.png', type: 'Sales' },
//   { name: 'Apple', logo: 'image/apple.png', type: 'IT' },
//   { name: 'Tesla', logo: 'image/tesla.png', type: 'Automotive' },
//   { name: 'Facebook', logo: 'image/facebook.png', type: 'Social Media' },
//   { name: 'Netflix', logo: 'image/netflix.png', type: 'Entertainment' },
// ];

// function CompanyList() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Filter companies based on search term
//   const filteredCompanies = companyData.filter(company =>
//     company.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="text-center p-6">
//       <h1 className="text-3xl font-bold mb-6">Companies that Visited</h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by company name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-md p-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Company Table */}
//       <table className="w-4/5 mx-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-3 text-left border border-gray-300">Company Name</th>
//             <th className="p-3 text-left border border-gray-300">Company Logo</th>
//             <th className="p-3 text-left border border-gray-300">Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredCompanies.length > 0 ? (
//             filteredCompanies.map((company, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="p-3 text-left font-medium text-blue-600">{company.name}</td>
//                 <td className="p-3">
//                   <img
//                     src={company.logo}
//                     alt={`${company.name} Logo`}
//                     className="w-12 h-auto"
//                   />
//                 </td>
//                 <td className="p-3 text-left">{company.type}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="p-3 text-center border border-gray-300 text-gray-500">
//                 No companies found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Home Button */}
//       <div className="flex justify-center mt-6">
//         <Link
//           to="/"
//           className="px-6 py-3 text-lg bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
//         >
//           🏠 Home
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CompanyList;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const companyData = [
//   { name: 'Google', logo: 'src/components/image/google.png', type: 'IT' },
//   { name: 'Amazon', logo: 'src/components/image/amazon.png', type: 'Sales' },
//   { name: 'Apple', logo: 'src/components/image/apple.png', type: 'IT' },
//   { name: 'Tesla', logo: 'src/components/image/tesla.png', type: 'Automotive' },
//   { name: 'Facebook', logo: 'src/components/image/facebook.png', type: 'Social Media' },
//   { name: 'Netflix', logo: 'src/components/image/netflix.png', type: 'Entertainment' },
// ];

// function CompanyList() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedType, setSelectedType] = useState('All');

//   const companyTypes = ['All', 'IT', 'Sales', 'Automotive', 'Social Media', 'Entertainment'];

//   const filteredCompanies = companyData.filter(company => {
//     const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = selectedType === 'All' || company.type === selectedType;
//     return matchesSearch && matchesType;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Our Valued <span className="text-blue-600">Recruiters</span>
//           </h1>
//           <Link
//             to="/"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 transition-transform transform hover:scale-105"
//           >
//             🏠 Return Home
//           </Link>
//         </div>

//         {/* Search and Filter Section */}
//         <div className="mb-8 space-y-4">
//           <div className="relative max-w-xl mx-auto">
//             <input
//               type="text"
//               placeholder="Search companies..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-4 border-0 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400"
//             />
//             <svg 
//               className="absolute right-4 top-4 h-6 w-6 text-gray-400"
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>

//           <div className="flex flex-wrap justify-center gap-3">
//             {companyTypes.map(type => (
//               <button
//                 key={type}
//                 onClick={() => setSelectedType(type)}
//                 className={`px-4 py-2 rounded-full font-medium transition-all ${
//                   selectedType === type 
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:bg-blue-50'
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Company Cards Grid */}
//         {filteredCompanies.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCompanies.map((company, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
//               >
//                 <div className="p-6 flex items-center space-x-4">
//                   <div className="flex-shrink-0">
//                     <img
//                       src={company.logo}
//                       alt={`${company.name} Logo`}
//                       className="w-16 h-16 object-contain rounded-lg bg-gray-100 p-2"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">{company.name}</h3>
//                     <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
//                       {company.type}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <div className="text-gray-500 text-xl mb-4">
//               🧐 No companies found matching your criteria
//             </div>
//             <button
//               onClick={() => { setSearchTerm(''); setSelectedType('All'); }}
//               className="text-blue-600 hover:text-blue-800 font-medium"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CompanyList;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const companyData = [
//   { name: 'Microsoft', logo: '/logos/microsoft.png', type: 'IT' },
//   { name: 'Deloitte', logo: '/logos/deloitte.png', type: 'Consulting' },
//   { name: 'PwC', logo: '/logos/pwc.png', type: 'Consulting' },
//   { name: 'EY', logo: '/logos/ey.png', type: 'Consulting' },
//   { name: 'Infosys', logo: '/logos/infosys.png', type: 'IT' },
//   { name: 'IBM', logo: '/logos/ibm.png', type: 'IT' },
//   { name: 'HashedIn', logo: '/logos/hashedin.png', type: 'IT' },
//   { name: 'Accenture', logo: '/logos/accenture.png', type: 'Consulting' },
//   { name: 'TCS (Tata Consultancy Services)', logo: '/logos/tcs.png', type: 'IT' },
//   { name: 'Cognizant', logo: '/logos/cognizant.png', type: 'IT' },
//   { name: 'Tech Mahindra', logo: '/logos/techmahindra.png', type: 'IT' },
//   { name: 'Hitachi', logo: '/logos/hitachi.png', type: 'Manufacturing' },
//   { name: 'Bosch', logo: '/logos/bosch.png', type: 'Automotive' },
//   { name: 'SAP', logo: '/logos/sap.png', type: 'IT' },
//   { name: 'PepsiCo', logo: '/logos/pepsico.png', type: 'FMCG' },
//   { name: 'Wipro', logo: '/logos/wipro.png', type: 'IT' },
//   { name: 'Capgemini', logo: '/logos/capgemini.png', type: 'Consulting' },
//   { name: 'ICICI Bank', logo: '/logos/icici.png', type: 'Banking' },
//   { name: 'HDFC Bank', logo: '/logos/hdfc.png', type: 'Banking' },
//   { name: 'Airtel', logo: '/logos/airtel.png', type: 'Telecom' },
//   { name: 'Samsung', logo: '/logos/samsung.png', type: 'Electronics' },
//   { name: 'Vivo', logo: '/logos/vivo.png', type: 'Electronics' },
//   { name: 'Hexaware', logo: '/logos/hexaware.png', type: 'IT' },
//   { name: 'KPIT', logo: '/logos/kpit.png', type: 'IT' },
//   { name: 'Medly', logo: '/logos/medly.png', type: 'Healthcare' },
//   { name: 'Lumen', logo: '/logos/lumen.png', type: 'Telecom' },
//   { name: 'Collabera', logo: '/logos/collabera.png', type: 'Consulting' },
//   { name: 'Trident Group', logo: '/logos/trident.png', type: 'Manufacturing' },
//   { name: 'Marriott', logo: '/logos/marriott.png', type: 'Hospitality' },
//   { name: 'Fortis Hospitals', logo: '/logos/fortis.png', type: 'Healthcare' },
//   { name: 'Lowes', logo: '/logos/lowes.png', type: 'Retail' },
//   { name: 'Genpact', logo: '/logos/genpact.png', type: 'Consulting' },
//   { name: 'ADP', logo: '/logos/adp.png', type: 'Consulting' },
//   { name: 'Mindtree', logo: '/logos/mindtree.png', type: 'IT' },
//   { name: 'Tata Advanced Systems', logo: '/logos/tataadvanced.png', type: 'Defense' },
//   { name: 'HCL', logo: '/logos/hcl.png', type: 'IT' },
//   { name: 'Recruit Benders', logo: '/logos/recruitbenders.png', type: 'HR Tech' },
//   { name: 'TrueBlue', logo: '/logos/trueblue.png', type: 'Staffing' },
//   { name: 'WNS', logo: '/logos/wns.png', type: 'BPO' },
//   { name: 'NTT Data', logo: '/logos/nttdata.png', type: 'IT' },
// ];

// const companyTypes = [
//   'All', 'IT', 'Consulting', 'Manufacturing', 'Automotive', 
//   'FMCG', 'Banking', 'Telecom', 'Electronics', 'Healthcare',
//   'Hospitality', 'Retail', 'Defense', 'HR Tech', 'Staffing', 'BPO'
// ];

// function CompanyList() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedType, setSelectedType] = useState('All');
//   const navigate = useNavigate();

//   const filteredCompanies = companyData.filter(company => {
//     const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesType = selectedType === 'All' || company.type === selectedType;
//     return matchesSearch && matchesType;
//   });

//   const handleCompanyClick = (company) => {
//     navigate('/company-details', { state: { company } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Campus Recruitment Partners
//           </h1>
//           <Link
//             to="/"
//             className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
//           >
//             🏠 Return Home
//           </Link>
//         </motion.div>

//         {/* Search and Filter Section */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mb-8 space-y-4"
//         >
//           <div className="relative max-w-xl mx-auto">
//             <input
//               type="text"
//               placeholder="Search companies..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-4 border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400"
//             />
//             <svg 
//               className="absolute right-4 top-4 h-6 w-6 text-gray-400"
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </div>

//           <div className="flex flex-wrap justify-center gap-3">
//             {companyTypes.map(type => (
//               <motion.button
//                 key={type}
//                 onClick={() => setSelectedType(type)}
//                 className={`px-4 py-2 rounded-full font-medium transition-all ${
//                   selectedType === type 
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:bg-blue-50'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {type}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Company Cards Grid */}
//         {filteredCompanies.length > 0 ? (
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {filteredCompanies.map((company, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl cursor-pointer group"
//                 whileHover={{ y: -5 }}
//                 onClick={() => handleCompanyClick(company)}
//               >
//                 <div className="p-6 flex items-center space-x-4">
//                   <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
//                     <img
//                       src={company.logo}
//                       alt={`${company.name} Logo`}
//                       className="w-16 h-16 object-contain"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//                       {company.name}
//                     </h3>
//                     <span className="text-sm text-blue-600 font-medium">{company.type}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div 
//             className="text-center py-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="text-gray-500 text-xl mb-4">
//               🧐 No companies found matching your criteria
//             </div>
//             <button
//               onClick={() => { setSearchTerm(''); setSelectedType('All'); }}
//               className="text-blue-600 hover:text-blue-800 font-medium"
//             >
//               Clear filters
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CompanyList;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// const companyData = [
//   { name: 'Microsoft', domain: 'microsoft.com', type: 'IT' },
//   { name: 'Deloitte', domain: 'deloitte.com', type: 'Consulting' },
//   { name: 'PwC', domain: 'pwc.com', type: 'Consulting' },
//   { name: 'EY', domain: 'ey.com', type: 'Consulting' },
//   { name: 'Infosys', domain: 'infosys.com', type: 'IT' },
//   { name: 'IBM', domain: 'ibm.com', type: 'IT' },
//   { name: 'HashedIn', domain: 'hashedin.com', type: 'IT' },
//   { name: 'Accenture', domain: 'accenture.com', type: 'Consulting' },
//   { name: 'TCS', domain: 'tcs.com', type: 'IT' },
//   { name: 'Cognizant', domain: 'cognizant.com', type: 'IT' },
//   { name: 'Tech Mahindra', domain: 'techmahindra.com', type: 'IT' },
//   { name: 'Hitachi', domain: 'hitachi.com', type: 'Manufacturing' },
//   { name: 'Bosch', domain: 'bosch.com', type: 'Automotive' },
//   { name: 'SAP', domain: 'sap.com', type: 'IT' },
//   { name: 'PepsiCo', domain: 'pepsico.com', type: 'FMCG' },
//   { name: 'Wipro', domain: 'wipro.com', type: 'IT' },
//   { name: 'Capgemini', domain: 'capgemini.com', type: 'Consulting' },
//   { name: 'ICICI Bank', domain: 'icicibank.com', type: 'Banking' },
//   { name: 'HDFC Bank', domain: 'hdfcbank.com', type: 'Banking' },
//   { name: 'Airtel', domain: 'airtel.in', type: 'Telecom' },
//   { name: 'Samsung', domain: 'samsung.com', type: 'Electronics' },
//   { name: 'Vivo', domain: 'vivo.in', type: 'Electronics' },
//   { name: 'Hexaware', domain: 'hexaware.com', type: 'IT' },
//   { name: 'KPIT', domain: 'kpit.com', type: 'IT' },
//   { name: 'Medly', domain: 'medly.com', type: 'Healthcare' },
//   { name: 'Lumen', domain: 'lumen.com', type: 'Telecom' },
//   { name: 'Collabera', domain: 'collabera.com', type: 'Consulting' },
//   { name: 'Trident Group', domain: 'tridentgroup.com', type: 'Manufacturing' },
//   { name: 'Marriott', domain: 'marriott.com', type: 'Hospitality' },
//   { name: 'Fortis Hospitals', domain: 'fortishealthcare.com', type: 'Healthcare' },
//   { name: 'Lowes', domain: 'lowes.com', type: 'Retail' },
//   { name: 'Genpact', domain: 'genpact.com', type: 'Consulting' },
//   { name: 'ADP', domain: 'adp.com', type: 'Consulting' },
//   { name: 'Mindtree', domain: 'mindtree.com', type: 'IT' },
//   { name: 'Tata Advanced Systems', domain: 'tataadvancedsystems.com', type: 'Defense' },
//   { name: 'HCL', domain: 'hcltech.com', type: 'IT' },
//   { name: 'Recruit Benders', domain: 'recruitbenders.com', type: 'HR Tech' },
//   { name: 'TrueBlue', domain: 'trueblue.com', type: 'Staffing' },
//   { name: 'WNS', domain: 'wns.com', type: 'BPO' },
//   { name: 'NTT Data', domain: 'nttdata.com', type: 'IT' },
// ];

// const companyTypes = [
//   'All', 'IT', 'Consulting', 'Manufacturing', 'Automotive', 
//   'FMCG', 'Banking', 'Telecom', 'Electronics', 'Healthcare',
//   'Hospitality', 'Retail', 'Defense', 'HR Tech', 'Staffing', 'BPO'
// ];


const companyData = [
  // IT & Technology
  { name: 'Microsoft', domain: 'microsoft.com', type: 'IT' },
  { name: 'Infosys', domain: 'infosys.com', type: 'IT' },
  { name: 'IBM', domain: 'ibm.com', type: 'IT' },
  { name: 'HashedIn', domain: 'hashedin.com', type: 'IT' },
  { name: 'TCS (Tata Consultancy Services)', domain: 'tcs.com', type: 'IT' },
  { name: 'Cognizant', domain: 'cognizant.com', type: 'IT' },
  { name: 'Tech Mahindra', domain: 'techmahindra.com', type: 'IT' },
  { name: 'Ericsson', domain: 'ericsson.com', type: 'Telecom' },
  { name: 'HCL', domain: 'hcltech.com', type: 'IT' },
  { name: 'Wipro', domain: 'wipro.com', type: 'IT' },
  { name: 'Berger', domain: 'bergerpaints.com', type: 'Manufacturing' },
  { name: 'Bosch', domain: 'bosch.com', type: 'Automotive' },
  { name: 'SAP', domain: 'sap.com', type: 'Enterprise Software' },
  { name: 'Pepsico', domain: 'pepsico.com', type: 'FMCG' },
  { name: 'Accolite Digital', domain: 'accolite.com', type: 'IT' },
  { name: 'Alembic', domain: 'alembicpharma.com', type: 'Pharmaceutical' },
  { name: 'Axis Bank', domain: 'axisbank.com', type: 'Banking' },
  { name: 'AU Small Finance Bank', domain: 'aubank.in', type: 'Banking' },
  { name: 'CCAELIUS', domain: 'ccaelius.com', type: 'Legal Tech' },
  { name: 'Capgemini', domain: 'capgemini.com', type: 'Consulting' },
  { name: 'eClerx', domain: 'eclerx.com', type: 'BPO' },
  { name: 'Sutherland', domain: 'sutherlandglobal.com', type: 'BPO' },
  { name: 'Informatica', domain: 'informatica.com', type: 'Data Management' },
  { name: 'KPIT', domain: 'kpit.com', type: 'IT' },
  { name: 'Hexaware', domain: 'hexaware.com', type: 'IT' },
  { name: 'ICICI Bank', domain: 'icicibank.com', type: 'Banking' },
  { name: 'IntelliPaat', domain: 'intellipaat.com', type: 'EdTech' },
  { name: 'EPAM', domain: 'epam.com', type: 'IT' },
  { name: 'KPoint', domain: 'kpoint.com', type: 'Video Tech' },
  { name: 'Innovaccer', domain: 'innovaccer.com', type: 'Health Tech' },
  { name: 'Infogain', domain: 'infogain.com', type: 'IT' },
  { name: 'LeadSquared', domain: 'leadsquared.com', type: 'Marketing Tech' },
  { name: 'IMS', domain: 'imsindia.com', type: 'Education' },
  { name: 'Keka', domain: 'keka.com', type: 'HR Tech' },
  { name: 'Mphasis', domain: 'mphasis.com', type: 'IT' },
  { name: 'GS Lab', domain: 'gslab.com', type: 'R&D' },
  { name: 'GlobalLogic', domain: 'globallogic.com', type: 'IT' },
  { name: 'Intellicus', domain: 'intellicus.com', type: 'Analytics' },
  { name: 'Lumen', domain: 'lumen.com', type: 'Telecom' },
  { name: 'Medly', domain: 'medly.com', type: 'Healthcare' },
  { name: 'Crowe Horwath', domain: 'crowe.com', type: 'Consulting' },
  { name: 'Daffodil', domain: 'daffodilsw.com', type: 'IT' },
  { name: 'HDFC', domain: 'hdfc.com', type: 'Banking' },
  { name: 'TIAA', domain: 'tiaa.org', type: 'Finance' },
  { name: 'EPAY', domain: 'epaysystems.com', type: 'FinTech' },
  { name: 'InnoData', domain: 'innodat.com', type: 'Data Solutions' },
  { name: 'Vivo', domain: 'vivo.com', type: 'Electronics' },
  { name: 'Artech', domain: 'artech.com', type: 'Staffing' },
  { name: 'HDFC Bank', domain: 'hdfcbank.com', type: 'Banking' },
  { name: 'Airtel', domain: 'airtel.in', type: 'Telecom' },
  { name: 'Mankind', domain: 'mankindpharma.com', type: 'Pharmaceutical' },
  { name: 'Recruit Benchiser', domain: 'recruiter.com', type: 'HR Tech' },
  { name: 'Tirupati Medicare', domain: 'tirupatimed.com', type: 'Healthcare' },
  { name: 'VIBCARE', domain: 'vibcare.com', type: 'Healthcare' },
  { name: 'Abryl', domain: 'abryl.com', type: 'Healthcare' },
  { name: 'Care Health Insurance', domain: 'careinsurance.com', type: 'Insurance' },
  { name: 'BITCS', domain: 'bitcs.com', type: 'IT' },
  { name: 'BLK-Max', domain: 'blkhospital.com', type: 'Healthcare' },
  { name: 'APCER', domain: 'apcerls.com', type: 'Healthcare' },
  { name: 'Collabera', domain: 'collabera.com', type: 'Staffing' },
  { name: 'Samsung', domain: 'samsung.com', type: 'Electronics' },
  { name: 'Fortis Hospitals', domain: 'fortishealthcare.com', type: 'Healthcare' },
  { name: 'Hyatt Regency', domain: 'hyatt.com', type: 'Hospitality' },
  { name: 'Trident', domain: 'tridenthotels.com', type: 'Hospitality' },
  { name: 'Marriott', domain: 'marriott.com', type: 'Hospitality' },
  { name: 'The Leela', domain: 'theleela.com', type: 'Hospitality' },
  { name: 'The Indian Company', domain: 'ticl.com', type: 'Manufacturing' },
  { name: 'LG Soft India', domain: 'lgsoftindia.com', type: 'IT' },
  { name: 'Lowe’s', domain: 'lowes.com', type: 'Retail' },
  { name: 'VI (Vodafone Idea)', domain: 'vi.in', type: 'Telecom' },
  { name: 'Learning Routes', domain: 'learningroutes.in', type: 'EdTech' },
  { name: 'Hanu', domain: 'hanu.com', type: 'IT' },
  { name: 'Mthree', domain: 'mthree.com', type: 'EdTech' },
  { name: 'Bebo', domain: 'bebo.com', type: 'Social Media' },
  { name: 'ADP', domain: 'adp.com', type: 'HR Solutions' },
  { name: 'Genpact', domain: 'genpact.com', type: 'BPO' },
  { name: 'Philips', domain: 'philips.com', type: 'Electronics' },
  { name: 'Macleods', domain: 'macleodspharma.com', type: 'Pharmaceutical' },
  { name: 'Everest', domain: 'everestind.com', type: 'FMCG' },
  { name: 'DXC Technology', domain: 'dxc.com', type: 'IT' },
  { name: 'Nagarro', domain: 'nagarro.com', type: 'IT' },
  { name: 'Hettich', domain: 'hettich.com', type: 'Manufacturing' },
  { name: 'TrueBlue', domain: 'trueblue.com', type: 'Staffing' },
  { name: 'CDK Global', domain: 'cdkglobal.com', type: 'Automotive Tech' },
  { name: 'Edifecs', domain: 'edifecs.com', type: 'Healthcare IT' },
  { name: 'NTT Data', domain: 'nttdata.com', type: 'IT' },
  { name: 'WNS', domain: 'wns.com', type: 'BPO' },
  { name: 'Allstate', domain: 'allstate.com', type: 'Insurance' },
  { name: 'Fiserv', domain: 'fiserv.com', type: 'FinTech' },
  { name: 'Meomarta', domain: 'meomarta.com', type: 'IT' },
  { name: 'Cloud Thing', domain: 'cloudthing.com', type: 'Cloud Services' },
  { name: 'Lybrate', domain: 'lybrate.com', type: 'Healthcare' },
  { name: 'Net Solutions', domain: 'netsolutions.com', type: 'IT' },
  { name: 'Celebal Technologies', domain: 'celebaltech.com', type: 'IT' },
  { name: 'Tata Advanced Systems', domain: 'tataadvancedsystems.com', type: 'Aerospace' },
  { name: 'Mindtree', domain: 'mindtree.com', type: 'IT' },
  { name: 'GreenPure', domain: 'greenpure.com', type: 'Environmental' },
  { name: 'Zydus', domain: 'zyduslife.com', type: 'Pharmaceutical' },
  { name: 'Signify', domain: 'signify.com', type: 'Lighting' },
  { name: 'Ecolab', domain: 'ecolab.com', type: 'Cleaning Solutions' },
  { name: 'Advantage', domain: 'advantage.com', type: 'Consulting' }
];

const companyTypes = [
  'All', 'IT', 'Banking', 'Healthcare', 'Pharmaceutical', 
  'Telecom', 'Electronics', 'Retail', 'FMCG', 'Enterprise Software',
  'Automotive', 'Hospitality', 'BPO', 'HR Tech', 'Staffing', 
  'Data Management', 'EdTech', 'Marketing Tech', 'Education', 'R&D',
  'Analytics', 'Finance', 'FinTech', 'Insurance', 'Manufacturing',
  'Social Media', 'Environmental', 'Aerospace', 'Cloud Services',
  'Legal Tech', 'Video Tech', 'Health Tech', 'Lighting', 'Cleaning Solutions'
];


function CompanyList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const navigate = useNavigate();

  const filteredCompanies = companyData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || company.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleCompanyClick = (company) => {
    navigate('/company-details', { state: { company } });
  };

  const getLogoUrl = (domain) => {
    const sources = [
      `https://logo.clearbit.com/${domain}?size=128`,
      `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      'https://via.placeholder.com/128/cccccc/ffffff?text=Logo+NA'
    ];
    return sources;
  };

  const handleImageError = (e, sources) => {
    const currentSrc = e.target.src;
    const currentIndex = sources.indexOf(currentSrc);
    
    if (currentIndex < sources.length - 1) {
      e.target.src = sources[currentIndex + 1];
    } else {
      e.target.style.opacity = '0.5';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Campus Recruitment Partners
          </h1>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            🏠 Return Home
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-400"
            />
            <svg 
              className="absolute right-4 top-4 h-6 w-6 text-gray-400"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {companyTypes.map(type => (
              <motion.button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedType === type 
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {filteredCompanies.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filteredCompanies.map((company, index) => {
              const sources = getLogoUrl(company.domain);
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl cursor-pointer group"
                  whileHover={{ y: -5 }}
                  onClick={() => handleCompanyClick(company)}
                >
                  <div className="p-6 flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg w-16 h-16 flex items-center justify-center">
                      <img
                        src={sources[0]}
                        alt={`${company.name} Logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => handleImageError(e, sources)}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {company.name}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">{company.type}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-500 text-xl mb-4">
              🧐 No companies found matching your criteria
            </div>
            <button
              onClick={() => { setSearchTerm(''); setSelectedType('All'); }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default CompanyList;