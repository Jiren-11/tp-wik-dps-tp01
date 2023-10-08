// Importer les modules nécessaires
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';



// Récupérer le port à partir de la variable d'environnement ou utiliser un port par défaut
const port = process.env.PING_LISTEN_PORT || 3000;

// Créer le serveur HTTP
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = parse(req.url || '', true);

  // Vérifier si la requête est GET /ping
  if (req.method === 'GET' && pathname === '/ping') {
    // Renvoyer les headers de la requête au format JSON
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(req.headers));
  } else {
    // Renvoyer une réponse vide avec un code 404 pour toutes les autres requêtes
    res.statusCode = 404;
    res.end();
  }
});

// Démarrer le serveur sur le port spécifié
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});