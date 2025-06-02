// full_server/server.js

import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

// Utiliser les routes définies dans routes/index.js
app.use('/', router);

// Lancer le serveur sur le port 1245
app.listen(port, () => {
  // Optionnel : console.log(`Server running on port ${port}`);
});

export default app;
