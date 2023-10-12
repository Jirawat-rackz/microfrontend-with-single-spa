const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5003;


express()
    .use(cors({ origin: true, credentials: true }))
    .use(express.static(path.join(__dirname, "dist")))
    .get("*", (req, res) => {
        res.sendFile("index.html", { root: "dist" });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));