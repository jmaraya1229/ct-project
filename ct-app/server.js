const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads

//create connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //password
    database: process.env.DB, //comments
  });
  

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

// Show all comments
app.get("/comments", (req, res) => {
    db.query("SELECT * FROM quiz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// Add new comment
app.post("/comments", (req, res) => {
const insertQuery = "INSERT INTO comment_message SET ?";
db.query(insertQuery, req.body, (err, result) => {
    if (err) {
    console.log(err);
    } else {
    res.send("Comment Added to Database");
    }
});
});
  
// Edit comment
app.put("/comments", (req, res) => {
    const updateQuery =
      "UPDATE quiz SET comment_message = ?, comment_rating = ? WHERE id = ?";
    db.query(
      updateQuery,
      [req.body.comment_message, req.body.comment_rating, req.body.id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/comments/:id", (req, res) => {
    db.query(
      "DELETE FROM quiz WHERE id = ?",
      req.params.id,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
   