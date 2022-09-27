const express = require("express");
const path = require("path");

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEW
app.set("view engine", "ejs");


// ROUTES
const router = require("./routes/routes");
app.use("/", router);

app.use("/js", express.static('assets'));

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is up at port ${PORT}`)
})