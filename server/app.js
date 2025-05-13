

//Configure environment variables
require('dotenv').config();

// Configure express app
const path = require('path');
const express = require("express");
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded( {extended: true }));

// Import routers
const lettersRouter = require("./routes/lettersRouter")



// Routes
app.get("/", (req, res) => res.send("This is the home!"));
app.use("/letters", lettersRouter);



// Set up port for listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));