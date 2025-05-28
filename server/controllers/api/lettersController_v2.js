const db = require("../../db/models/letters_v2");

// GET /api/v2/letters/ --> renders lists all letters
async function listLetters(req, res) {
    try {
        const letters = await db.fetchAllLetters();
        return res.status(200).json(letters);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch letters.' });
    }
};


// GET /api/v2/letters/:id --> renders a letter
async function getLetter(req, res) {
    try {
        const letter = await db.fetchLetterById(req.params.id);
        return res.status(200).json(letter);
    } catch (err) {
        console.error(err);
        return res.status(500).json( { error: 'Could not fetch letter.' });
    }
}


// POST /api/v2/letters/ --> adds new letter
async function createLetter(req, res) {
    try {
        const { title, content, started_at, ended_at } = req.body;
        const newLetter = await db.insertLetter(title, content, started_at, ended_at);
        return res.status(201).json(newLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not create letter.' });
    }
};


// PUT /api/v2/letters/:id --> updates a component of the letter
async function updateLetter(req, res) {
    try {
        const { title, content, ended_at } = req.body;
        const editedLetter = await db.updateLetterById(req.params.id, title, content, ended_at);
        return res.status(200).json(editedLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not edit letter. ' });
    }
}; 


// DELETE /api/v2/letters/:id --> deletes letter
async function deleteLetter(req, res) {
    try {
        const deletedLetter = await db.deleteLetterById(req.params.id);
        return res.status(204).json(deletedLetter);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Could not delete letter.' });
    }
};


module.exports = {
    listLetters,
    getLetter,
    createLetter,
    updateLetter,
    deleteLetter
};