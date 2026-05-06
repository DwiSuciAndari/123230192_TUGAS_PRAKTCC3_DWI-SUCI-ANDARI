const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const notesRoutes = require("./routes/notesRoutes");
app.use("/notes", notesRoutes);

app.use(express.static(path.join(__dirname)));

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});