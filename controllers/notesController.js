const db = require("../config/db");

exports.getNotes = (req, res) => {
  db.query("SELECT * FROM notes ORDER BY tanggal_dibuat DESC", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

exports.createNote = (req, res) => {
  const { judul, isi } = req.body;

  db.query(
    "INSERT INTO notes (judul, isi) VALUES (?, ?)",
    [judul, isi],
    (err, result) => {
      if (err) {
        console.log("ERROR INSERT:", err);
        return res.status(500).json(err);
      }
      res.json({ message: "Berhasil tambah" });
    }
  );
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { judul, isi } = req.body;

  db.query(
    "UPDATE notes SET judul=?, isi=? WHERE id=?",
    [judul, isi, id],
    (err, result) => {
      if (err) {
        console.log("ERROR UPDATE:", err);
        return res.status(500).json(err);
      }
      res.json({ message: "Berhasil update" });
    }
  );
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM notes WHERE id=?", [id], (err, result) => {
    if (err) {
      console.log("ERROR DELETE:", err);
      return res.status(500).json(err);
    }
    res.json({ message: "Berhasil hapus" });
  });
};