const router = require("express").Router();
const Game = require("../models/games");

router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(err).send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  } catch (err) {
    res.status(err).send("Error");
  }
});

router.post("/", async (req, res) => {
  const game = new Game({
    title: req.body.title,
    developer: req.body.developer,
    publisher: req.body.publisher,
  });

  try {
    const g1 = await game.save();
    res.json(g1);
  } catch (err) {
    res.status(err).send("Error", err);
  }
});

module.exports = router;
