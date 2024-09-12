const express = require('express');
const cors = require('cors'); // Assure-toi d'activer CORS si ton front-end est sur un domaine différent.
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware pour permettre les requêtes CORS
app.use(cors());

// Middleware pour parser les données du formulaire en JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1 align="center">Serveur en ligne</h1>`)
})

// Définir une route POST pour /submit
app.post('/', (req, res) => {
    const newData = req.body;  // Données envoyées depuis le formulaire

    // Lire les données existantes dans users.json
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier:", err);
            return res.status(500).send({ message: 'Erreur lors de la lecture du fichier.' });
        }

        let users = [];

        // Si le fichier n'est pas vide, parse les anciennes données
        if (data) {
            try {
                users = JSON.parse(data);  // Parse les anciennes données
            } catch (parseError) {
                console.error("Erreur de parsing JSON:", parseError);
                return res.status(500).send({ message: 'Erreur de parsing des données existantes.' });
            }
        }

        // Ajouter les nouvelles données
        users.push(newData);

        // Écrire les nouvelles données dans le fichier users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error("Erreur d'écriture:", err);
                return res.status(500).send({ message: 'Erreur lors de l\'écriture des données.' });
            }

            console.log("Fichier mis à jour avec succès.");
            res.status(200).send({ message: 'Données reçues et mises à jour avec succès !' });
        });
    });
});

app.get("/", (req, res) => {
    res.json(newData)
})

// Démarrer le serveur sur le port 3001
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
