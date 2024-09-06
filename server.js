const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

// Middleware pour parser les données JSON du body
app.use(bodyParser.json());

// Route GET pour la racine
app.get("/", (req, res) => {
    res.send("Bienvenue sur le serveur ! Utilisez /submit-form pour soumettre des données.");
});

// Route POST pour recevoir les données du formulaire
app.post("/submit-form", (req, res) => {
    const { nom, email, message } = req.body;

    // Affiche les données dans la console du serveur
    console.log('Nom:', nom);
    console.log('Email:', email);
    console.log('Message:', message);

    // Renvoie les données soumises au client en JSON
    res.json({
        nom: nom,
        email: email,
        message: message
    });
});

app.listen(port, () => {
    console.log("Serveur connecté sur le port " + port);
});
