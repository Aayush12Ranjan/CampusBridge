



// import React, { useState, useEffect } from 'react';
// import { Building2, Users, UserX } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // Default logos and types (simplified, no logo or type needed)
// const companyDefaults = {
//   Google: {},
//   Amazon: {},
//   Microsoft: {},
//   Netflix: {},
// };

// const CompanyVisits = () => {
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [students, setStudents] = useState([]);
//   const [dataLoaded, setDataLoaded] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/auth/users');
//         const data = await response.json();
//         setStudents(data);
//         setDataLoaded(true);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//         setDataLoaded(true);
//       }
//     };
//     fetchStudents();
//   }, []);

//   const getCompanyStats = (companyName) => {
//     if (!dataLoaded || !students.length) {
//       return { selectedCount: 0, rejectedCount: 0 };
//     }
//     const companyStudents = students.filter(
//       (student) =>
//         student &&
//         student.companyName &&
//         student.companyName.toLowerCase() === companyName.toLowerCase()
//     );
//     const selectedCount = companyStudents.filter(
//       (student) => student.status === 'Selected'
//     ).length;
//     const rejectedCount = companyStudents.filter(
//       (student) => student.status !== 'Selected'
//     ).length;
//     return { selectedCount, rejectedCount };
//   };

//   const companies = dataLoaded
//     ? [...new Set(students
//         .filter((student) => student && student.companyName)
//         .map((student) => student.companyName))]
//         .map((companyName) => ({
//           name: companyName,
//           ...getCompanyStats(companyName),
//         }))
//     : [];

//   const handleCompanyClick = (company) => {
//     setSelectedCompany(company);
//   };

//   const handleViewReviews = (status) => {
//     if (selectedCompany) {
//       navigate('/userlist', { state: { companyName: selectedCompany.name, status } });
//     }
//   };

//   if (!dataLoaded) {
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//         <h1 className="text-3xl font-bold mb-12">Loading...</h1>
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold text-center mb-12">Companies that Visited</h1>

//       <div className="overflow-x-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
//               <th className="px-6 py-4 text-left">Company Name</th>
//               <th className="px-6 py-4 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {companies.map((company, index) => (
//               <tr
//                 key={company.name + index}
//                 className="hover:bg-gray-50 transition-all duration-300 cursor-pointer"
//                 onClick={() => handleCompanyClick(company)}
//               >
//                 <td className="px-6 py-4 font-medium">{company.name}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:rotate-12 hover:scale-125"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCompanyClick(company);
//                     }}
//                   >
//                     <Building2 className="w-5 h-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedCompany && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-xl">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold">{selectedCompany.name}</h2>
//               <button
//                 onClick={() => setSelectedCompany(null)}
//                 className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-300"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-green-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <Users className="w-6 h-6 text-green-600 mr-2" />
//                     <h3 className="text-xl font-semibold">Selected</h3>
//                   </div>
//                   <span className="text-green-600 font-bold text-2xl">
//                     {selectedCompany.selectedCount}
//                   </span>
//                 </div>
//                 <button
//                   className="w-full border border-green-600 text-green-600 py-2 rounded hover:bg-green-50 transition-all duration-300 hover:shadow-md"
//                   onClick={() => handleViewReviews('Selected')}
//                 >
//                   View Reviews
//                 </button>
//               </div>

//               <div className="bg-red-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <UserX className="w-6 h-6 text-red-600 mr-2" />
//                     <h3 className="text-xl font-semibold">Rejected</h3>
//                   </div>
//                   <span className="text-red-600 font-bold text-2xl">
//                     {selectedCompany.rejectedCount}
//                   </span>
//                 </div>
//                 <button
//                   className="w-full border border-red-600 text-red-600 py-2 rounded hover:bg-red-50 transition-all duration-300 hover:shadow-md"
//                   onClick={() => handleViewReviews('Rejected')}
//                 >
//                   View Reviews
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyVisits;



import React, { useState, useEffect } from 'react';
import { Building2, Users, UserX, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyVisits = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [students, setStudents] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/auth/users');
        const data = await response.json();
        setStudents(data);
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching students:', error);
        setDataLoaded(true);
      }
    };
    fetchStudents();
  }, []);

  const getCompanyStats = (companyName) => {
    if (!dataLoaded || !students.length) return { selectedCount: 0, rejectedCount: 0 };
    
    const companyStudents = students.filter(
      student => student?.companyName?.toLowerCase() === companyName.toLowerCase()
    );
    
    return {
      selectedCount: companyStudents.filter(s => s.status === 'Selected').length,
      rejectedCount: companyStudents.filter(s => s.status !== 'Selected').length
    };
  };

  const companies = dataLoaded
    ? [...new Set(students
        .filter(s => s?.companyName)
        .map(s => s.companyName))]
        .map(name => ({ name, ...getCompanyStats(name) }))
    : [];

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const handleViewReviews = (status) => {
    if (selectedCompany) {
      navigate('/userlist', { state: { 
        companyName: selectedCompany.name, 
        status 
      }});
    }
  };

  if (!dataLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-8">
        <h1 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent inline-block">
          Loading Company Data
        </h1>
        <div className="flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Campus Recruitment Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Explore companies that conducted placements and student outcomes
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">
            🏢 Active Recruiters ({companies.length})
          </h2>
        </div>
        
        <div className="divide-y divide-blue-50">
          {companies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="group flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
              onClick={() => handleCompanyClick(company)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Users className="w-4 h-4 mr-1" />
                    {company.selectedCount} Selected
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <UserX className="w-4 h-4 mr-1" />
                    {company.rejectedCount} Rejected
                  </span>
                </div>
              </div>
              <button 
                className="p-2 rounded-lg hover:bg-blue-100 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCompanyClick(company);
                }}
              >
                <ArrowRight className="w-6 h-6 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* {selectedCompany && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button> */}
{/* {selectedCompany && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-10 p-4 animate-in fade-in">
    <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative">
      <button
        onClick={() => setSelectedCompany(null)}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-gray-500" />
      </button> */}


{selectedCompany && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start justify-center pt-12 p-4 animate-in fade-in">
    <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-md lg:max-w-2xl w-full shadow-lg relative">
      <button
        onClick={() => setSelectedCompany(null)}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-gray-500" />
      </button>





            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCompany.name}
                </h2>
                <p className="text-gray-600">Placement Statistics</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-green-600">
                        <Users className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-semibold">Selected</h3>
                      </div>
                      <p className="text-sm text-green-700">Students received offers</p>
                    </div>
                    <span className="text-3xl font-bold text-green-600">
                      {selectedCompany.selectedCount}
                    </span>
                  </div>
                  <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
                    onClick={() => handleViewReviews('Selected')}
                  >
                    <span>View Success Stories</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border border-red-100 ">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-red-600">
                        <UserX className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-semibold">Rejected</h3>
                      </div>
                      <p className="text-sm text-red-700">Students didn't clear rounds</p>
                    </div>
                    <span className="text-3xl font-bold text-red-600">
                      {selectedCompany.rejectedCount}
                    </span>
                  </div>
                  <button
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
                    onClick={() => handleViewReviews('Rejected')}
                  >
                    <span>Analyze Patterns</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyVisits;