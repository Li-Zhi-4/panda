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
 * 
 * 
 * letters db
 * 
 */

const { Router } = require("express");
const lettersRouter = Router();
const lettersController = require("../controllers/lettersController")

lettersRouter.get("/",          lettersController.getLetters);
lettersRouter.get("/new",       (req, res) => res.send("Renders form to create new letters."));
lettersRouter.post("/",         (req, res) => res.send("Adds new letter."));
lettersRouter.get("/:id/edit",  (req, res) => res.send("Renders form to edit letter."));
lettersRouter.patch("/:id",     (req, res) => res.send("Updates a component of the letter."));
lettersRouter.put("/:id",       (req, res) => res.send("Updates entire letter (similar to how we implemented it previously."));
lettersRouter.delete("/:id",    (req, res) => res.send("Deletes letter."));

module.exports = lettersRouter;