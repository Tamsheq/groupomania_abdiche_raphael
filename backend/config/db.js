const mongoose = require("mongoose");

// connexion à la base de données

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.a9pfb.mongodb.net/groupomania",)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));