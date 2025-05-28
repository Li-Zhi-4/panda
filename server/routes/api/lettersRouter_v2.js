/**
 * lettersRouter_v2
 * 
 * GET /letters             --> renders lists all letters
 * GET /letter/:id          --> renders a letter
 * POST /letters            --> adds new letter
 * PUT /letters/:id         --> updates the entire letter
 * DELETE /letters/:id      --> deletes letter
 */

const { Router } = require("express");
const lettersRouter = Router();
const lettersController = require("../../controllers/api/lettersController_v2")

lettersRouter.get("/",          lettersController.listLetters);
lettersRouter.get("/:id",       lettersController.getLetter);
lettersRouter.post("/",         lettersController.createLetter);
lettersRouter.put("/:id",       lettersController.updateLetter);
lettersRouter.delete("/:id",    lettersController.deleteLetter);

module.exports = lettersRouter;