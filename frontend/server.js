const express = require('express')
const app = express()
const mysql = require("mysql");
const port = 3000

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "bahay"
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Listening on port ${port}')
})