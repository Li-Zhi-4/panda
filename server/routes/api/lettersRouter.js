/**
 * lettersRouter
 * 
 * GET /letters             --> renders lists all letters
 * GET /letter/:id          --> renders a letter
 * GET /letters/new         --> renders form to create new letters
 * POST /letters            --> adds new letter
 * GET /letters/:id/edit    --> renders form to edit letter
 * PATCH /letters/:id       --> updates a component of the letter
 * PUT /letters/:id         --> updates the entire letter
 * DELETE /letters/:id      --> deletes letter
 */

const { Router } = require("express");
const lettersRouter = Router();
const lettersController = require("../../controllers/api/lettersController")

lettersRouter.get("/",          lettersController.getLetters);
lettersRouter.get("/:id",       lettersController.getLetter);
lettersRouter.post("/",         lettersController.postLetter);
lettersRouter.patch("/:id",     lettersController.patchLetter);
lettersRouter.delete("/:id",    lettersController.deleteLetter);

module.exports = lettersRouter;