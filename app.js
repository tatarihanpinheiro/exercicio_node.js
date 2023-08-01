const express = require('express');
const app = express();
const port = 3000;

app.get('/json', (req, res) => {
  const data = { message: 'Olá, mundo!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
