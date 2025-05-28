require('dotenv').config();
const pool = require("../pools");
const MODEL = 'letters_v2'

/**
 * Gets all letters in the letter table. 
 * @returns all letters created
 */
async function fetchAllLetters() {
    const { rows } = await pool.query(`SELECT * FROM ${MODEL};`);
    return rows;
}


/**
 * Finds the letter corresponding to the id.
 * @param {string} id an id correponding to the primary key in letters database
 * @returns letter corresponding to id
 */
async function fetchLetterById(id) {
    const { rows } = await pool.query(
        `SELECT * FROM ${MODEL} WHERE id = $1;`,
        [id]
    );
    return rows[0] || null;
}


/**
 * Inserts a new letter into the letter table.
 * @param {string} title title of letter
 * @param {string} content contents of letter
 * @param {timestamp} started_at date that letter was started at
 * @param {timestamp} ended_at date that letter was completed at
 * @returns the letter created
 */
async function insertLetter(title, content, started_at, ended_at) {
    const { rows } = await pool.query(
        `INSERT INTO ${MODEL} (title, content, started_at, ended_at) VALUES ($1, $2, $3, $4) RETURNING *;`,
        [title, content, started_at, ended_at]
    )
    return rows[0];
}


/**
 * Edits a letter and inserts the edits into the letters table.
 * @param {number} id 
 * @param {string} title 
 * @param {string} content 
 * @param {timestamp} ended_at
 * @returns the edited letter
 */
async function updateLetterById(id, title, content, ended_at) {
    const { rows } = await pool.query(
        `UPDATE ${MODEL} SET title=$1, content=$2, ended_at=$3 WHERE id=$4 RETURNING *;`,
        [title, content, ended_at, id]
    )
    return rows[0] || null;
}


/**
 * Deletes a letter from the letters table.
 * @param {number} id 
 * @returns the deleted letter
 */
async function deleteLetterById(id) {
    const { rows } = await pool.query(
        `DELETE FROM ${MODEL} WHERE id=$1 RETURNING *;`,
        [id]
    )
    return rows[0] || null;
}


module.exports = {
    fetchAllLetters,
    fetchLetterById,
    insertLetter,
    updateLetterById,
    deleteLetterById
};