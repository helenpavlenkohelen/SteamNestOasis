require("dotenv").config();
require("./models.js");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const sequelize = require("./db.js");
const { Sequelize } = require("sequelize");

const app = express();

app.use(express.json());
app.use(cors({}));

app.use("/api", routes);

const start = async () => {
	try {
		await sequelize.authenticate();
		console.log(1);
		await sequelize.sync();
		app.listen(process.env.PORT, () => {
			console.log(`Server started on port ${process.env.PORT}`);
		});
	} catch (e) {
		console.log(e);
		console.log("Error auth database");
	}
};

start();

//https://console.twilio.com/us1/account/trust-hub/account-upgrade
