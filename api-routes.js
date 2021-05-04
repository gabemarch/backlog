const router = require("express").Router();

router.get('/', function(req, res) {
  res.json({
    status: 'Its Alive',
    message: 'Welcome to Backlog API'
  });
})

module.exports = router;