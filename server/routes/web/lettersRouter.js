/**
 * lettersRouter
 * 
 * GET /letters             --> renders lists all letters
 * GET /letters/new         --> renders form to create new letters
 * POST /letters            --> adds new letter
 * GET /letters/:id/edit    --> renders form to edit letter
 * PATCH /letters/:id       --> updates a component of the letter
 * PUT /letters/:id         --> updates the entire letter
 * DELETE /letters/:id      --> deletes letter
 */

const { Router } = require("express");
const lettersRouter = Router();
const lettersController = require("../../controllers/web/lettersController")

lettersRouter.get("/",          lettersController.getLetters);
lettersRouter.get("/new",       lettersController.getNewLetter);
lettersRouter.post("/",         lettersController.postLetter);
lettersRouter.get("/:id/edit",  lettersController.getEditLetter);
lettersRouter.patch("/:id",     lettersController.patchLetter);
//lettersRouter.put("/:id",       (req, res) => res.send("Updates entire letter (similar to how we implemented it previously."));
lettersRouter.delete("/:id",    lettersController.deleteLetter);

module.exports = lettersRouter;