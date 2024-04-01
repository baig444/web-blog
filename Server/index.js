const express = require("express");
const cors = require("cors");
const connectDB = require("./connection");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");
require("dotenv").config();

// PORT 
const PORT = 5000;

// database connection

connectDB()


const app = express();
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(express.json());
app.use(cookieParser());


// routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", router);

//   port listen
app.listen(PORT, () => {
    console.log(`Backend server is running!${PORT}`);
});
