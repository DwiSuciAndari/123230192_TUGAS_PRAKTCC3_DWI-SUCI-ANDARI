const db = require("../config/db");

exports.getAll = (cb) => {
  db.query("SELECT * FROM notes", cb);
};

exports.create = (data, cb) => {
  db.query(
    "INSERT INTO notes (judul, isi) VALUES (?, ?)",
    [data.judul, data.isi],
    cb
  );
};

exports.update = (id, data, cb) => {
  db.query(
    "UPDATE notes SET judul=?, isi=? WHERE id=?",
    [data.judul, data.isi, id],
    cb
  );
};

exports.delete = (id, cb) => {
  db.query("DELETE FROM notes WHERE id=?", [id], cb);
};