const express = require('express');
require('dotenv').config()

const app = express();

// app.get("/", (req, res) => {
//     res.json('Hello World')
// })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/auth"));

app.listen(process.env.PORT, () =>
    console.log("Le serveur est lancé sur le port " + process.env.PORT))