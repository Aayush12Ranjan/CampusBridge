
// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// export default function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const companyName = location.state?.companyName;
//   const statusFilter = location.state?.status;

//   const usersApiUrl = 'http://localhost:5000/api/auth/users';

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(usersApiUrl);
//         let usersData = Array.isArray(response.data) ? response.data : response.data.users || [];

//         const filteredUsers = usersData
//           .filter((user) => {
//             const matchesCompany = !companyName || (
//               user.companyName &&
//               user.companyName.toLowerCase() === companyName.toLowerCase()
//             );
//             const matchesStatus = !statusFilter || (
//               (statusFilter === 'Selected' && user.status === 'Selected') ||
//               (statusFilter === 'Rejected' && user.status !== 'Selected')
//             );
//             return matchesCompany && matchesStatus;
//           })
//           .map((user) => ({
//             id: user._id,
//             username: user.username || 'Unknown User',
//             email: user.email || 'No Email',
//             profilePicture: user.profileImage || '/default-avatar.png',
//             batch: user.batch || 'Unknown Batch',
//             companyName: user.companyName || 'N/A',
//             status: user.status || 'Unknown',
//           }));

//         setUsers(filteredUsers);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [companyName, statusFilter]);

//   // Handle the selection of a student
//   const handleSelectStudent = (userId) => {
//     // You can send a request to your backend to mark this student as selected
//     axios.patch(`http://localhost:5000/api/auth/users/${userId}`, { status: 'Selected' })
//       .then(response => {
//         // Update local state after successful selection
//         setUsers((prevUsers) =>
//           prevUsers.map(user => user.id === userId ? { ...user, status: 'Selected' } : user)
//         );
//       })
//       .catch(error => {
//         console.error('Error selecting student:', error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
//       <div className="mt-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all 
//                    hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
//         >
//           ← Back
//         </button>
//       </div>

//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-md">
//         {statusFilter} Users for {companyName || 'All Companies'}
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
//         </div>
//       ) : users.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               className="group relative bg-white p-4 rounded-2xl shadow-xl cursor-pointer 
//                         hover:shadow-2xl transform transition-all duration-500 hover:scale-105
//                         border-2 border-transparent hover:border-purple-100 overflow-hidden"
//               onClick={() => navigate(`/user-details/${user.id}`)}
//             >
//               {/* Profile Section */}
//               <div className="relative z-10">
//                 <div className="relative mx-auto w-28 h-28 mb-4">
//                   <img
//                     src={user.profilePicture}
//                     alt={user.username}
//                     className="h-full w-full rounded-full object-cover border-4 border-white shadow-lg
//                              group-hover:border-purple-100 transition-colors duration-300"
//                   />
//                 </div>

//                 {/* User Info */}
//                 <div className="space-y-3 text-center">
//                   <h2 className="text-xl font-bold text-gray-800 transform group-hover:scale-110 transition-transform">
//                     {user.username}
//                   </h2>

//                   <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
//                     <span className="relative flex h-3 w-3">
//                       <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 
//                         ${user.status === 'Selected' ? 'animate-ping bg-green-400' : 'animate-pulse bg-red-400'}`} />
//                       <span className={`relative inline-flex rounded-full h-3 w-3 
//                         ${user.status === 'Selected' ? 'bg-green-500' : 'bg-red-500'}`} />
//                     </span>
//                     <span className="text-sm font-medium text-gray-600">{user.companyName}</span>
//                   </div>

//                   {/* Batch Badge */}
//                   <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full 
//                                 transform group-hover:-translate-y-1 transition-transform duration-300">
//                     <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       {user.batch}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Select Student Button */}
//               {user.status !== 'Selected' && (
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                   <button
//                     onClick={() => handleSelectStudent(user.id)}
//                     className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all"
//                   >
//                     Select Student
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <div className="inline-block mb-4 animate-bounce">
//             <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <p className="text-xl text-gray-600 font-medium">
//             No {statusFilter ? `${statusFilter.toLowerCase()} ` : ''}users found {companyName ? `at ${companyName}` : ''}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// export default function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const companyName = location.state?.companyName;
//   const statusFilter = location.state?.status;

//   const usersApiUrl = 'http://localhost:5000/api/auth/users';

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(usersApiUrl);
//         let usersData = Array.isArray(response.data) ? response.data : response.data.users || [];

//         const filteredUsers = usersData
//           .filter((user) => {
//             const matchesCompany = !companyName || (
//               user.companyName &&
//               user.companyName.toLowerCase() === companyName.toLowerCase()
//             );
//             const matchesStatus = !statusFilter || (
//               (statusFilter === 'Selected' && user.status === 'Selected') ||
//               (statusFilter === 'Rejected' && user.status !== 'Selected')
//             );
//             return matchesCompany && matchesStatus;
//           })
//           .map((user) => ({
//             id: user._id,
//             username: user.username || 'Unknown Student',
//             email: user.email || 'No Email',
//             profilePicture: user.profileImage || '/default-avatar.png',
//             batch: user.batch || 'Unknown Batch',
//             companyName: user.companyName || 'N/A',
//             status: user.status || 'Unknown',
//           }));

//         setUsers(filteredUsers);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [companyName, statusFilter]);

//   const handleSelectStudent = (userId) => {
//     axios.patch(`http://localhost:5000/api/auth/users/${userId}`, { status: 'Selected' })
//       .then(() => {
//         setUsers((prevUsers) =>
//           prevUsers.map(user => user.id === userId ? { ...user, status: 'Selected' } : user)
//         );
//       })
//       .catch(error => {
//         console.error('Error selecting student:', error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
//       <div className="mt-6">
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all 
//                    hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
//         >
//           ← Back
//         </button>
//       </div>

//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-md">
//         {statusFilter} Students for {companyName || 'All Companies'}
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
//         </div>
//       ) : users.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               className="group relative bg-white p-4 rounded-2xl shadow-xl cursor-pointer 
//                         hover:shadow-2xl transform transition-all duration-500 hover:scale-105
//                         border-2 border-transparent hover:border-purple-100 overflow-hidden"
//               onClick={() => navigate(`/user-details/${user.id}`)}
//             >
//               {/* Profile Section */}
//               <div className="relative z-10">
//                 <div className="relative mx-auto w-28 h-28 mb-4">
//                   <img
//                     src={user.profilePicture}
//                     alt={user.username}
//                     className="h-full w-full rounded-full object-cover border-4 border-white shadow-lg
//                              group-hover:border-purple-100 transition-colors duration-300"
//                   />
//                 </div>

//                 {/* Student Info */}
//                 <div className="space-y-3 text-center">
//                   <h2 className="text-xl font-bold text-gray-800 transform group-hover:scale-110 transition-transform">
//                     {user.username}
//                   </h2>

//                   <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
//                     <span className="relative flex h-3 w-3">
//                       <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 
//                         ${user.status === 'Selected' ? 'animate-ping bg-green-400' : 'bg-red-400 animate-none'}`} />
//                       <span className={`relative inline-flex rounded-full h-3 w-3 
//                         ${user.status === 'Selected' ? 'bg-green-500' : 'bg-red-500'}`} />
//                     </span>
//                     <span className="text-sm font-medium text-gray-600">{user.companyName}</span>
//                   </div>

//                   {/* Batch Badge */}
//                   <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full 
//                                 transform group-hover:-translate-y-1 transition-transform duration-300">
//                     <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       {user.batch}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Select Student Button */}
//               {user.status !== 'Selected' && (
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSelectStudent(user.id);
//                     }}
//                     className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all"
//                   >
//                     Select Student
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12">
//           <div className="inline-block mb-4 animate-bounce">
//             <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <p className="text-xl text-gray-600 font-medium">
//             No {statusFilter ? `${statusFilter.toLowerCase()} ` : ''}students found {companyName ? `at ${companyName}` : ''}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const companyName = location.state?.companyName;
  const statusFilter = location.state?.status;

  const usersApiUrl = 'http://localhost:8082/api/auth/users';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(usersApiUrl);
        let usersData = Array.isArray(response.data) ? response.data : response.data.users || [];

        const filteredUsers = usersData
          .filter((user) => {
            const matchesCompany = !companyName || (
              user.companyName &&
              user.companyName.toLowerCase() === companyName.toLowerCase()
            );
            const matchesStatus = !statusFilter || (
              (statusFilter === 'Selected' && user.status === 'Selected') ||
              (statusFilter === 'Rejected' && user.status !== 'Selected')
            );
            return matchesCompany && matchesStatus;
          })
          .map((user) => ({
            id: user._id,
            username: user.username || 'Unknown Student',
            email: user.email || 'No Email',
            profilePicture: user.profileImage || '/default-avatar.png',
            batch: user.batch || 'Unknown Batch',
            companyName: user.companyName || 'N/A',
            status: user.status || 'Unknown',
          }));

        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching students:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [companyName, statusFilter]);

  const handleSelectStudent = (userId) => {
    axios.patch(`http://localhost:5000/api/auth/users/${userId}`, { status: 'Selected' })
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map(user => user.id === userId ? { ...user, status: 'Selected' } : user)
        );
      })
      .catch(error => {
        console.error('Error selecting student:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all 
                   hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          ← Back
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-md">
        {statusFilter} Students for {companyName || 'All Companies'}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      ) : users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="group relative bg-white p-6 rounded-2xl shadow-xl cursor-pointer 
                        hover:shadow-2xl transform transition-all duration-500 hover:scale-105
                        border-2 border-transparent hover:border-purple-100 overflow-hidden"
              onClick={() => navigate(`/user-details/${user.id}`)}
            >
              {/* Profile Section */}
              <div className="relative z-10">
                <div className="relative mx-auto w-28 h-28 mb-4">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    className="h-full w-full rounded-full object-cover border-4 border-white shadow-lg
                             group-hover:border-purple-100 transition-colors duration-300"
                  />
                </div>

                {/* Student Info */}
                <div className="space-y-3 text-center">
                  <h2 className="text-xl font-bold text-gray-800 transform group-hover:scale-110 transition-transform">
                    {user.username}
                  </h2>

                  {/* Status and Company */}
                  <div className="flex justify-center gap-2 items-center flex-wrap">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
                      <span className="relative flex h-3 w-3">
                        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 
                          ${user.status === 'Selected' ? 'animate-ping bg-green-400' : 'bg-red-400 animate-none'}`} />
                        <span className={`relative inline-flex rounded-full h-3 w-3 
                          ${user.status === 'Selected' ? 'bg-green-500' : 'bg-red-500'}`} />
                      </span>
                      <span className="text-sm font-medium text-gray-600">{user.companyName}</span>
                    </div>

                    {/* Batch Badge */}
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {user.batch}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Select Student Button */}
              {user.status !== 'Selected' && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectStudent(user.id);
                    }}
                    className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition-all"
                  >
                    Select Student
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-block mb-4 animate-bounce">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xl text-gray-600 font-medium">
            No {statusFilter ? `${statusFilter.toLowerCase()} ` : ''}students found {companyName ? `at ${companyName}` : ''}
          </p>
        </div>
      )}
    </div>
  );
}
