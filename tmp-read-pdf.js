const fs = require("fs");
const pdf = require("pdf-parse");
const data = fs.readFileSync("C:/Users/budat/Downloads/Pavan_Kumr_Budati_Resume.pdf");
pdf(data).then(res => { console.log(res.text); }).catch(err => { console.error(err); process.exit(1); });
