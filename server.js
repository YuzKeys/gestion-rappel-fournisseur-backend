import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';


const { PORT, MONGO_URI } = process.env;

const app = express();

// Middleware
app.use(morgan('tiny')); // Logger HTTP
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connexion à MongoDB réussie !');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
    }
}
connectDB();

// Exemple de route
app.get('/', (req, res) => {
    res.send('Bienvenue dans l\'application de gestion de rappel fournisseur');
});

app.get('/api', (req, res) => {
    res.json({ "message": 'Bienvenue dans l\'application de gestion de rappel fournisseur' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port http://localhost:${PORT} `);
});
