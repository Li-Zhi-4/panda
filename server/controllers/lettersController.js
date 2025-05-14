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

// GET /letters/:id/edit --> renders form to edit letter
async function getEditLetter(req, res) {
    const letter = await db.getALetter(req.params.id);
    console.log("Letter: ", letter.id);
    console.log('params.id →', req.params.id);

    res.render("editLetter", {
        title: "Edit Letter",
        letter: letter,
    });
};

// PATCH /letters/:id --> updates a component of the letter
async function patchLetter(req, res, next) {
    try {
        const { title, content } = req.body;
        db.editLetter(req.params.id, title, content);
        res.redirect("/letters");
    } catch (err) {
        next(err);
    }
}; 

// DELETE /letters/:id --> deletes letter
async function deleteLetter(req, res, next) {
    db.deleteLetter(req.params.id);
    res.redirect("/letters");
};

module.exports = {
    getLetters,
    getNewLetter,
    postLetter,
    getEditLetter,
    patchLetter,
    deleteLetter
};
