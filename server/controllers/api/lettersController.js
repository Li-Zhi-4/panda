const db = require("../../db/models/letters");

// GET /api/letters --> renders lists all letters
async function getLetters(req, res) {
    try {
        const letters = await db.getAllLetters();
        return res.status(200).json(letters);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch letters.'});
    }
};

// GET /api/letter --> renders a letter
async function getLetter(req, res) {
    try {
        const letter = await db.getALetter(req.params.id);
        return res.status(200).json(letter);
    } catch (err) {
        console.error(err);
        return res.status(500).json( { error: 'Could not fetch letter.' });
    }
}


// POST /api/letters --> adds new letter
async function postLetter(req, res) {
    try {
        const { title, content } = req.body;
        const newLetter = await db.createLetter(title, content);
        return res.status(201).json(newLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not create letter.' });
    }
};

// PATCH /api/letters/:id --> updates a component of the letter
async function patchLetter(req, res) {
    try {
        const { title, content } = req.body;
        const editedLetter = await db.editLetter(req.params.id, title, content);
        return res.status(200).json(editedLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not edit letter. '});
    }
}; 

// DELETE /api/letters/:id --> deletes letter
async function deleteLetter(req, res) {
    try {
        const deletedLetter = await db.deleteLetter(req.params.id);
        return res.status(204).json(deletedLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not delete letter. '});
    }
};

module.exports = {
    getLetters,
    getLetter,
    postLetter,
    patchLetter,
    deleteLetter
};