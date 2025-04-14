import Contact from "../model/Contact.js";

export const createcontact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
    
       
        if (!name || !email || !phone || !message) {
          return res.status(400).json({ error: "All fields are required" });
        }
    
        
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
    
        res.status(201).json({ message: "Message received successfully!",newContact });
      } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
      }
  };