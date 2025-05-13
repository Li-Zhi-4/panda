const db = require("../db/models/letters");

async function getLetters(req, res) {
    const letters = await db.getAllLetters();
    console.log("Letters: ", letters);
    res.send("Letters: " + letters.map(letter => `${letter.title}\n${letter.content}`).join(", "));
}


module.exports = {
    getLetters
};
