const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "bikesystem",
});

app.get("/getStatusText", (req, res) => {
  db.query("SELECT * FROM status_types", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getBikes", (req, res) => {
  db.query("SELECT * FROM bikes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getStatus", (req, res) => {
  let idBike = req.query.idBike;
  db.query(
    "SELECT * FROM statuses WHERE id_bike=?",
    [idBike],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});

app.get("/getBikeInfo", (req, res) => {
  let idBike = req.query.idBike;
  db.query("SELECT * FROM bikes WHERE id_bike=?", [idBike], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      // console.log(result);
    }
  });
});

app.put("/updateFlag", (req, res) => {
  flag = req.body.flag;
  id = req.body.id_bike;
  db.query(
    "UPDATE bikes SET flag = ? WHERE id_bike = ?",
    [flag, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        console.log(id);
        // res.send(result);
      }
    }
  );
});

app.put("/updateStatusText", (req, res) => {
  type = req.body.type;
  text = req.body.text;
  id = req.body.id_bike;
  db.query(
    "UPDATE statuses SET status = ? WHERE id_bike = ? AND type = ?",
    [text, id, type],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running on 3001");
});
