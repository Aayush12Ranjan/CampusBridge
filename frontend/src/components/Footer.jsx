// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Navigation Links */}
//           <div>
//             <ul className="space-y-2">
//               <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
//               <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>

//               <li><Link to="/placement-procedure" className="hover:text-blue-400">Placement Procedure</Link></li>
//               <li><Link to="/about-us" className="hover:text-blue-400">About Us</Link></li>
//             </ul>
//           </div>

//           {/* Email Subscription */}
//           <div>
//             <p className="text-lg font-semibold mb-4">Subscribe to our newsletter</p>
//             <form className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-2 rounded-md text-gray-900"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//           {/* Social Media Links */}
//           <div>
//             <p className="text-lg font-semibold mb-4">Follow us on:</p>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//                 <Facebook />
//               </a>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//                 <Twitter />
//               </a>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//                 <Linkedin />
//               </a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
//                 <Instagram />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-800 text-center">
//           <p>&copy; 2024 College Placement Office. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/Contact" className="hover:text-blue-400">Contact</Link></li>
              <li><Link to="/placement-procedure" className="hover:text-blue-400">Placement Procedure</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400">About Us</Link></li>
            </ul>
          </div>

          {/* About Placement Cell */}
          <div>
            <p className="text-lg font-semibold mb-4">About Our Placement Cell</p>
            <p className="text-gray-400">
              Our dedicated placement team works closely with students to provide career guidance, 
              industry exposure, and recruitment opportunities with top companies.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Follow us on:</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 College Placement Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
