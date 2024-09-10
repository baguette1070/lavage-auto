const express = require('express');
const fs = require('fs'); // Pour manipuler le système de fichiers
const app = express();

// Route principale pour afficher le formulaire
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html");
});


// Route pour gérer la soumission du formulaire
app.get("/form", (req, res) => {
    const userData = {
        nom: req.query.nom,
        email: req.query.email,
        message: req.query.message
    };

    // Vérifier si le fichier users.json existe déjà
    fs.readFile('users.json', 'utf8', (err, data) => {
        let users = [];
        
        if (!err && data) {
            // Si le fichier existe et contient déjà des données, les lire
            users = JSON.parse(data);
        }
        
        // Ajouter les nouvelles données utilisateur dans le tableau
        users.push(userData);

        // Écrire le tableau mis à jour dans le fichier users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture dans le fichier:", err);
                return res.status(500).send("Erreur lors de l'enregistrement des données");
            }

            // Réponse de succès
            return res.status(200).send("Données reçues et enregistrées dans users.json");
        });
    });
});

// Démarrage du serveur
app.listen(80, () => {
    console.log("Serveur connecté sur le port 80");
});
