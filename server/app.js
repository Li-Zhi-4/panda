//Configure environment variables
require('dotenv').config();

// Configure express app
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');
const express = require("express");

const app = express();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Parsing
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());
app.use(methodOverride('_method'));

// Import routers
const webLettersRouter = require("./routes/web/lettersRouter")
const apiLettersRouter = require("./routes/api/lettersRouter")
const apiLettersRouter_v2 = require("./routes/api/lettersRouter_v2")

// Web Routes
app.get("/", (req, res) => res.send("This is the home!"));
app.use("/letters", webLettersRouter);


// API Routes
app.use("/api/letters", apiLettersRouter);
app.use("/api/v2/letters", apiLettersRouter_v2);

// Set up port for listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));