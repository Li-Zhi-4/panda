const pool = require("../pools");

pool.query(`SELECT current_database(), current_schema()`)
  .then(res => console.log("Connected to:", res.rows))
  .catch(console.error);

/**
 * getAllLetters 
 * @returns all letters created
 */
async function getAllLetters() {
    const { rows } = await pool.query("SELECT * FROM letters");
    return rows;
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

module.exports = {
    getAllLetters,
    createLetter
};