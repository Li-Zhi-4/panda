const pool = require("../pools");

/**
 * Gets all letters in the letter table. 
 * @returns all letters created
 */
async function getAllLetters() {
    const { rows } = await pool.query("SELECT * FROM letters;");
    return rows;
}

/**
 * Finds the letter corresponding to the id.
 * @param {string} id an id correponding to the primary key in letters database
 * @returns letter corresponding to id
 */
async function getALetter(id) {
    const { rows } = await pool.query(
        'SELECT id, title, content FROM letters WHERE id = $1;',
        [id]
    );
    return rows[0] || null;
}

/**
 * Inserts a new letter into the letter table.
 * @param {string} title title of letter
 * @param {string} content contents of letter
 * @returns the letter created
 */
async function createLetter(title, content) {
    const { rows } = await pool.query(
        `INSERT INTO letters (title, content)
        VALUES ($1, $2)
        RETURNING *;`,
        [title, content]
    )
    return rows[0];
}

/**
 * Edits a letter and inserts the edits into the letters table.
 * @param {number} id 
 * @param {string} title 
 * @param {string} content 
 * @returns the edited letter
 */
async function editLetter(id, title, content) {
    const { rows } = await pool.query(
        `UPDATE letters SET title=$1, content=$2 WHERE id=$3 RETURNING *;`,
        [title, content, id]
    )
    return rows[0] || null;
}

/**
 * Deletes a letter from the letters table.
 * @param {number} id 
 * @returns the deleted letter
 */
async function deleteLetter(id) {
    const { rows } = await pool.query(
        `DELETE FROM letters WHERE id=$1 RETURNING *;`,
        [id]
    )
    return rows[0] || null;
}

module.exports = {
    getAllLetters,
    getALetter,
    createLetter,
    editLetter,
    deleteLetter
};