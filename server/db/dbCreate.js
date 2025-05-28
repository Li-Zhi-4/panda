require('dotenv').config();
const pool = require("./pools");


const EXTENSIONS = `
    CREATE EXTENSION IF NOT EXISTS citext;
`;

const USERS = `
    CREATE TABLE IF NOT EXISTS users (
        id                  INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        first_name          TEXT            NOT NULL,
        last_name           TEXT            NOT NULL,
        email               CITEXT          NOT NULL        UNIQUE,
        password_hash       CHAR(60)        NOT NULL,
        username            VARCHAR(30)     NOT NULL        UNIQUE,
        handle              VARCHAR(30),
        created_at          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        updated_at          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
`;
const remove_USERS = `DROP TABLE users;`

/**
 * Add the following under id when adding authentication and users
 * user_id             INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 */
const LETTERS = `
    CREATE TABLE IF NOT EXISTS letters_v2 (
        id                  INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title               TEXT            NOT NULL,
        content             TEXT            NOT NULL,
        word_count          INTEGER GENERATED ALWAYS AS (
                                array_length(regexp_split_to_array(content, '\s+'), 1)
                            ) STORED,
        started_at          TIMESTAMP WITH TIME ZONE NOT NULL,
        ended_at            TIMESTAMP WITH TIME ZONE NOT NULL,
        time_spent          INTERVAL NOT NULL GENERATED ALWAYS AS (ended_at - started_at) STORED,
        date_written        DATE            NOT NULL        DEFAULT CURRENT_DATE,
        send_at             TIMESTAMP WITH TIME ZONE,
        created_at          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        updated_at          TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    );
`;
const remove_LETTERS = `DROP TABLE letters_v2;`

const letter_1 = `
    INSERT INTO letters_v2 (title, content, started_at, ended_at) 
    VALUES ('This is a title of a letter', 'This is the contents of a letter', '2025-05-28T14:00:00+00', '2025-05-28T14:12:30+00');
`;


async function main() {
    console.log("seeding...");

    // await pool.query(letter_1);
    // await pool.end();
    console.log("done");
}

main();