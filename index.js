import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Praesto deployment is working!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Praesto demo app running on port 3000");
});