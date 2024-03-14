const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const { error } = require('console')

// -- Connection To Database --
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bahay"
})


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// -- Main SQL ALGORITHM -- 
app.get("/api/get", (req, res) => {
  const sqlGet = `
  SELECT *,
         (CASE
             WHEN u.type = m.type THEN 2
             WHEN u.location = m.location THEN 3
             WHEN u.price <= m.price * 1.1 AND u.price >= m.price * 0.9 THEN 2
             WHEN TRIM(UPPER(u.isnearschool)) = TRIM(UPPER(m.isnearschool)) THEN 0.1
             WHEN TRIM(UPPER(u.isnearchurch)) = TRIM(UPPER(m.isnearchurch)) THEN 0.1
             WHEN TRIM(UPPER(u.isnearmall)) = TRIM(UPPER(m.isnearmall)) THEN 0.1
             ELSE 0
         END) AS score
  FROM userpreferencestable u
  LEFT JOIN propertiestable m ON u.type = m.type AND u.location = m.location
  HAVING score > 0
  ORDER BY score DESC;
`;
  
    db.query(sqlGet, (error, results) => {
      if (error) {
        // handle error
        console.error("Error executing query:", error);
        return res.status(500).json({ message: "Internal server error." });
      }
  
      res.send(results);
    });
});


// -- GET PREFERRECES--
app.get("/api/get/option/location", (req, res) => {
  const sqlGetoptionLocation = "SELECT DISTINCT location FROM propertiestable";
  db.query(sqlGetoptionLocation, (err, result) => {
    if (err) {
      console.log("error", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("result", result);
    res.send(result);
  });
});

// -- GET PREFERRECES --
app.get("/api/get/option/type", (req, res) => {
  const sqlGetoptionType = "SELECT DISTINCT type FROM propertiestable";
  db.query(sqlGetoptionType, (err, result) => {
    if (err) {
      console.log("error", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("result", result);
    res.send(result);
  });
});

// -- GET PREFERRECES --
app.get("/api/get/option/price", (req, res) => {
  const sqlGetoptionPrice = "SELECT DISTINCT price FROM propertiestable";
  db.query(sqlGetoptionPrice, (err, result) => {
    if (err) {
      console.log("error", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("result", result);
    res.send(result);
  });
});



//app.get("/", (req, res) => {
    //const sqlInsert = "INSERT INTO testtable (id, name) VALUES ('', 'Admin')"
    //db.query(sqlInsert, (err, result) => {
        //console.log("error", error);
        //console.log("result", result);
    //})
    //res.send("Hello World")
//})

app.listen(5000, () => {
    console.log("Server is Running on Port 5000");
})