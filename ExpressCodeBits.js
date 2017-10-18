// Code Bit #1
// Initializing Express

// In root folder, create entry point app.js (or index.js)

// require Express
const express = require('express');
// initialize application
const app = express();

// Index Route
app.get('/', (req, res) =>{
  res.send('INDEX');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// End Code Bit #1