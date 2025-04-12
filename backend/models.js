const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define("admin", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	login: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
});

const ContactInfo = sequelize.define("contactInfo", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	phone: { type: DataTypes.STRING, unique: true },
	instagram: { type: DataTypes.STRING, unique: true },
	facebook: { type: DataTypes.STRING, unique: true },
});

module.exports = { Admin, ContactInfo };
