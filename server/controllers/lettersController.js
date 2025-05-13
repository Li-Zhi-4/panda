const db = require("../db/models/letters");

// GET /letters --> renders lists all letters
async function getLetters(req, res) {
    const letters = await db.getAllLetters();
    res.render("lettersIndex", {
        title: "Letters Index",
        letters: letters,
    });
};

// GET /letters/new --> renders form to create new letters
async function getNewLetter(req, res) {
    res.render("createLetter", {
        title: "Create New Letter",
    });
};

// POST /letters --> adds new letter
async function postLetter(req, res) {
    const { title, content } = req.body;
    db.createLetter(title, content);
    res.redirect("/letters")
};


module.exports = {
    getLetters,
    getNewLetter,
    postLetter
};
