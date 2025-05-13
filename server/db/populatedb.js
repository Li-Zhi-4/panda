const { Client } = require("pg");

const USER = `
    CREATE TABLE IF NOT EXISTS owner (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username
        firstName
        lastName
        email
        password
    )
`;

/**
 * Simple letters table
 */
const LETTERS = `
    CREATE TABLE IF NOT EXISTS letters (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title TEXT,
        content TEXT
    );
`;