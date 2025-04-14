// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import PlacementProcedure from './components/PlacementProcedure';
// import AlumniSuccess from './components/AlumniSuccess';
// import Contact from './components/Contact';
// import CompanyVisits from './components/CompanyVisits';
// import Footer from './components/Footer';
// import TechnicalProblems from './components/TechnicalProblems';
// import UserList from './UserList';
// import UserDetails from './UserDetails';
// import ReviewModal from './components/ReviewModal';
// import AuthModal from './components/AuthModal';
// import SignUp from './components/SignUp';

// import Login from './components/Login';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         {/* ✅ Reduced margin for better spacing */}
//         <main className="flex-grow mt-10 sm:mt-12 md:mt-14 lg:mt-16">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/company-visits" element={<CompanyVisits />} />
//             <Route path="/placement-procedure" element={<PlacementProcedure />} />
//             <Route path="/alumni-success" element={<AlumniSuccess />} />
//             <Route path="/contact-placement-cell" element={<Contact />} />
//             <Route path="/review" element={<ReviewModal/>} />
//             <Route path="/signup" element={<SignUp/>} />
//             <Route path="/login" element={<Login/>} />
//             <Route path="/auth" element={<AuthModal/>} />


//             <Route path="/technical-problems" element={<TechnicalProblems />} />

//             <Route path="/userlist" element={<UserList />} /> 
//         <Route path="/user-details/:userId" element={<UserDetails />} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlacementProcedure from './components/PlacementProcedure';
import AlumniSuccess from './components/AlumniSuccess';
import Contact from './components/Contact';
import CompanyVisits from './components/CompanyVisits';
import Footer from './components/Footer';
import TechnicalProblems from './components/TechnicalProblems';
import UserList from './UserList';
import UserDetails from './UserDetails';
import ReviewModal from './components/ReviewModal';
import AuthModal from './components/AuthModal';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import EditReview from './components/EditReview';
import CompanyList from './components/CompanyList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-visits" element={<CompanyVisits />} />
            <Route path="/placement-procedure" element={<PlacementProcedure />} />
            <Route path="/alumni-success" element={<AlumniSuccess />} />
            <Route path="/contact-placement-cell" element={<Contact />} />
            <Route path="/review" element={<ReviewModal />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<AuthModal />} />
            <Route path="/technical-problems" element={<TechnicalProblems />} />
            <Route path="/userlist" element={<UserList />} /> 
            <Route path="/user-details/:userId" element={<UserDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-review/:reviewId" element={<EditReview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company-list" element={<CompanyList />} />
            

            {/* ✅ Protected Route for Profile */}
            {/* <Route path="/profile/:userId" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
