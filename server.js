const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/');
    res.json(response.data.results);
  } catch (error) {
    console.error('Error en la petición:', error);
    res.status(500).json({ error: 'Error al obtener datos. Por favor, intenta de nuevo.' });
  }
});

app.get('/api/characters/search', async (req, res) => {
  const searchTerm = req.query.name;
  if (!searchTerm) {
    return res.status(400).json({ error: 'Por favor, ingresa un nombre para buscar.' });
  }

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error en la búsqueda:', error);
    res.status(500).json({ error: 'Error al realizar la búsqueda. Por favor, intenta de nuevo.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
