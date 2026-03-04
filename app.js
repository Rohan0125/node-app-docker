const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send("Hello from node app");
});

app.listen("3000",() => {
 console.log("Node is running and listing on port 3000");
});
