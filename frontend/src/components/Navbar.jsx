

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Home, Building2, ClipboardList, Users, Mail, Star, User, LogIn, LogOut } from "lucide-react";
import API from "../Api/axioninstance.js";
import defaultUserImage from "./image/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(defaultUserImage);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      setIsLoading(true);
      try {
        const response = await API.get("http://localhost:8082/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
        });

        if (response.data?.profileImage) {
          setUserImage(response.data.profileImage);
        } else {
          setUserImage(defaultUserImage);
        }
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Auth check failed:", error);
        handleLogout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = defaultUserImage;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserImage(defaultUserImage);
    navigate("/");
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "", icon: <Home size={15} /> },
    { name: "Company Visits", path: "company-visits", icon: <Building2 size={15} /> },
    { name: "Placement Procedure", path: "placement-procedure", icon: <ClipboardList size={15} /> },
    { name: "Alumni Success", path: "alumni-success", icon: <Users size={15} /> },
    { name: "Contact", path: "contact-placement-cell", icon: <Mail size={15} /> },
    { name: "Reviews", path: "auth", icon: <Star size={15} /> },
  ];

  const authItems = [
    { name: "Sign Up", path: "signup", icon: <User size={15} /> },
    { name: "Login", path: "login", icon: <LogIn size={15} /> },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src="src/components/image/logo.png"
              alt="College Logo"
              className="h-14 w-auto hover:scale-105 transition-transform cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={`/${item.path}`}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium group relative"
              >
                {item.icon}
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center gap-4 ml-4">
                {isLoading ? (
                  <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                ) : (
                  <img
                    src={userImage}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => navigate("/profile")}
                    onError={handleImageError}
                  />
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              authItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.path}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={`/${item.path}`}
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <>
                <div
                  className="flex items-center gap-3 px-3 py-3 cursor-pointer text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                >
                  {isLoading ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                  ) : (
                    <img
                      src={userImage}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-blue-600"
                      onError={handleImageError}
                    />
                  )}
                  Profile
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              authItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.path}`}
                  className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Menu, X, Home, Building2, ClipboardList, Users, Mail, Star, User, LogIn, LogOut } from "lucide-react";
// import API from "../Api/axioninstance.js";
// import defaultUserImage from "./image/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(defaultUserImage);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       setIsLoading(true);
//       try {
//         const response = await API.get("http://localhost:8082/api/auth/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Cache-Control": "no-cache",
//           },
//         });

//         if (response.data?.profileImage) {
//           setUserImage(response.data.profileImage);
//         } else {
//           setUserImage(defaultUserImage);
//         }
//         setIsLoggedIn(true);
//       } catch (error) {
//         console.error("Auth check failed:", error);
//         handleLogout();
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkAuth();
//     window.addEventListener("storage", checkAuth);
//     return () => window.removeEventListener("storage", checkAuth);
//   }, []);

//   const handleImageError = (e) => {
//     e.target.onerror = null; // Prevent infinite loop
//     e.target.src = defaultUserImage;
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setUserImage(defaultUserImage);
//     navigate("/");
//     setIsOpen(false);
//   };

//   const navItems = [
//     { name: "Home", path: "", icon: <Home size={18} /> },
//     { name: "Company Visits", path: "company-visits", icon: <Building2 size={18} /> },
//     { name: "Placement Procedure", path: "placement-procedure", icon: <ClipboardList size={18} /> },
//     { name: "Alumni Success", path: "alumni-success", icon: <Users size={18} /> },
//     { name: "Contact", path: "contact-placement-cell", icon: <Mail size={18} /> },
//     { name: "Reviews", path: "auth", icon: <Star size={18} /> },
//   ];

//   const authItems = [
//     { name: "Sign Up", path: "signup", icon: <User size={18} /> },
//     { name: "Login", path: "login", icon: <LogIn size={18} /> },
//   ];

//   return (
//     <nav className="bg-white/80 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <Link to="/" className="flex-shrink-0">
//             <img
//               src="src/components/image/logo.png"
//               alt="College Logo"
//               className="h-16 w-auto hover:scale-105 transition-transform cursor-pointer"
//             />
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={`/${item.path}`}
//                 className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 font-medium group relative"
//               >
//                 {item.icon}
//                 <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
//                   {item.name}
//                 </span>
//               </Link>
//             ))}

//             {isLoggedIn ? (
//               <div className="flex items-center gap-6 ml-4">
//                 {isLoading ? (
//                   <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
//                 ) : (
//                   <img
//                     src={userImage}
//                     alt="User Profile"
//                     className="w-12 h-12 rounded-full border-2 border-blue-600 cursor-pointer hover:scale-110 transition-transform"
//                     onClick={() => navigate("/profile")}
//                     onError={handleImageError}
//                   />
//                 )}
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               authItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={`/${item.path}`}
//                   className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   {item.icon}
//                   {item.name}
//                 </Link>
//               ))
//             )}
//           </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         <div className={`md:hidden ${isOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300`}>
//           <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/95 backdrop-blur-sm">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={`/${item.path}`}
//                 className="flex items-center gap-4 px-4 py-3 text-lg text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.icon}
//                 {item.name}
//               </Link>
//             ))}

//             {isLoggedIn ? (
//               <>
//                 <div
//                   className="flex items-center gap-4 px-4 py-3 cursor-pointer text-lg text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
//                   onClick={() => {
//                     navigate("/profile");
//                     setIsOpen(false);
//                   }}
//                 >
//                   {isLoading ? (
//                     <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
//                   ) : (
//                     <img
//                       src={userImage}
//                       alt="Profile"
//                       className="w-10 h-10 rounded-full border-2 border-blue-600"
//                       onError={handleImageError}
//                     />
//                   )}
//                   Profile
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-4 px-4 py-3 text-lg text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
//                 >
//                   <LogOut size={18} />
//                   Logout
//                 </button>
//               </>
//             ) : (
//               authItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={`/${item.path}`}
//                   className="flex items-center gap-4 px-4 py-3 text-lg text-gray-700 hover:bg-blue-50 rounded-lg hover:text-blue-600 font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.icon}
//                   {item.name}
//                 </Link>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




