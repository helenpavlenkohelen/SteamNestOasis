const { ContactInfo } = require("../models.js");
const jwt = require("jsonwebtoken");

class ContactInfoController {
	static async update(req, res) {
		if (!req.headers.authorization) {
			return res.status(401).json({ message: "Not auth" });
		}

		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "Not auth" });
		}

		try {
			jwt.verify(token, process.env.SECRET_KEY);
			const { email, phone, instagram, facebook } = req.body;

			const contactInfo = await ContactInfo.findOne();

			if (email) contactInfo.email = email;
			if (phone) contactInfo.phone = phone;
			if (instagram) contactInfo.instagram = instagram;
			if (facebook) contactInfo.facebook = facebook;

			await contactInfo.save();
			return res.status(200).json(contactInfo);
		} catch (e) {
			console.log(e);
			return res.status(401).json({ message: "Not auth" });
		}
	}

	static async getAll(req, res) {
		const contactInfo = await ContactInfo.findOne();
		return res.status(200).json(contactInfo);
	}
}

module.exports = ContactInfoController;
