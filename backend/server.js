const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const mongoose =  require("mongoose");
const notes = require('./routes/notes.js')


dotenv.config({path: './config/config.env'});
const connectDB = require("./config/db.js")
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/notes', notes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`));
