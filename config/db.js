const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, { // Connexion à la base de données MongoDB
        useNewUrlParser: true, // Options de connexion
        useUnifiedTopology: true,
    }).then(() => console.log("Connecté à la base de données")) // Callback en cas de succès
        .catch((err) => console.log(err)); // Callback en cas d'erreur
}

module.exports = connectDB;