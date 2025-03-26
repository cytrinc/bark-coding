//the server
let express;
try {
    express = require("express");
} catch {
    console.error("Seems like express isn't installed. To fix this, run \"npm i\" (or use bun/pnpm if you have it) then try again.");
    require('process').exit(1);
}
const app = express();

app.use(express.static("."));

const fs = require("fs");
const path = require("path");

const verceljson = JSON.parse(fs.readFileSync("vercel.json", "utf-8"));
const rewrites = verceljson.rewrites;

rewrites.forEach(item => {
    app.get(item.source, (_,res) => {
        res.sendFile(path.resolve("." + item.destination));
    });
});

app.listen(8080, () => {
    console.log("bark development server running on port 8080.");
});