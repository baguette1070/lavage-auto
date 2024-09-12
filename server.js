const express = require('express');
const cors = require('cors'); // Assure-toi d'activer CORS si ton front-end est sur un domaine différent.
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware pour permettre les requêtes CORS
app.use(cors());

app.get("/", (req, res) => {
    res.send("")
})

// Middleware pour parser les données du formulaire en JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Définir une route POST pour /submit
app.post('/', (req, res) => {
    console.log(req.body); // Affiche les données envoyées dans le terminal
    res.status(200).json({ message: 'Données reçues avec succès !' });

});

// Démarrer le serveur sur le port 3001
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
