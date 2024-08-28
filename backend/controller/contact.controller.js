import Contact from "../model/contact.model.js";

export const saveContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name: name,
            email: email,
            message: message,
        });

        await newContact.save();
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
