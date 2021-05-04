const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

const uri =
  "mongodb+srv://admin:J4vvebzaLFXf84EM@backlogcluster.vuwuu.mongodb.net/BacklogCluster?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on("open", function () {
  console.log("DB connected...");
});

app.use(express.json());

const apiRoutes = require("./routers/games");
app.use("/games", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
