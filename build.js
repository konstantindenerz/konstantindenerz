const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

const options = {
	padding: 1,
	margin: 1,
  borderStyle: "round",
  borderColor: "green"
};

const card = chalk.white(boxen('amazing', options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card); 
console.log(card);
