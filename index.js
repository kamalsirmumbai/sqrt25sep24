const express = require("express");
const cors = require("cors");
const fs = require("fs");

app = express();
app.use(cors());

app.get("/find", (req, res) => {
	let num = req.query.number;
	let n = parseFloat(num);
	let r = n ** 0.5;
	let m = "square root = " + r.toFixed(2);
	let data = "DT = " + new Date().toString() + " number = " + n + " result = " + r + "\n";
	fs.appendFile("result.txt", data, (err) => {});
	res.json({"msg":m});
});

app.listen( 9000, () => { console.log("ready @ 9000"); });