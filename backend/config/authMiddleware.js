
import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token:", verified);

    if (!verified.id && !verified._id) {
      return res.status(401).json({ message: "Invalid Token - User ID missing" });
    }

    req.user = { _id: verified.id || verified._id, username: verified.username || "Unknown" };

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).json({ message: "Invalid Token" });
  }
};


// import jwt from "jsonwebtoken";

// export const authenticateUser = (req, res, next) => {
//   const authHeader = req.header("Authorization");

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Access Denied. No token provided." });
//   }

//   const token = authHeader.split(" ")[1]; // Extract token

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token

//     console.log("Decoded Token:", decoded);

//     if (!decoded.userId) {
//       return res.status(401).json({ message: "Invalid Token - User ID missing" });
//     }

//     // Attach user details to request object
//     req.user = { _id: decoded.userId, role: decoded.role };

//     next(); // Proceed to the next middleware/controller
//   } catch (error) {
//     console.error("JWT Verification Error:", error.message);
//     res.status(401).json({ message: "Invalid Token" });
//   }
// };
