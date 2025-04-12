const { Admin } = require("../models.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class AdminController {
	static async registration(req, res) {
		const { login, password } = req.body;
		if (!login) {
			return res.status(400).json({ message: "login is required" });
		}
		if (!password) {
			return res.status(400).json({ message: "password is required" });
		}
		const findAdmin = await Admin.findOne({ where: { login } });
		if (findAdmin) {
			return res.status(400).json({ message: "This not unique login" });
		}
		const hashPassword = await bcrypt.hash(password, 5);
		const admin = await Admin.create({ login, password: hashPassword });
		const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, {
			expiresIn: "7d",
		});
		return res.status(200).json({ token });
	}

	static async login(req, res) {
		const { login, password } = req.body;
		if (!login) {
			return res.status(400).json({ message: "login is required" });
		}
		if (!password) {
			return res.status(400).json({ message: "password is required" });
		}
		const findAdmin = await Admin.findOne({ where: { login } });
		if (!findAdmin) {
			return res.status(404).json({ message: "not correct login" });
		}

		const comparePassword = await bcrypt.compare(
			password,
			findAdmin.password
		);
		if (!comparePassword) {
			return res.status(400).json({ message: "not correct password" });
		}

		const token = jwt.sign({ id: findAdmin.id }, process.env.SECRET_KEY, {
			expiresIn: "7d",
		});
		return res.status(200).json({ token });
	}

	static async reLogin(req, res) {
		if (!req.headers.authorization) {
			return res.status(401).json({ message: "Not auth" });
		}

		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "Not auth" });
		}

		try {
			const decoded = jwt.verify(token, process.env.SECRET_KEY);
			const tokenNew = jwt.sign(
				{ id: decoded.id },
				process.env.SECRET_KEY,
				{
					expiresIn: "7d",
				}
			);
			return res.status(200).json({ token: tokenNew });
		} catch (e) {
			console.log(e);
			return res.status(401).json({ message: "Not auth" });
		}
	}
}

module.exports = AdminController;
