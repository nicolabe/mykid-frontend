const express = require('express');

const app = express();

app.post('/api/login', (req, res) => {
  console.log(req);
  res.json({message: "Logget inn"});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);