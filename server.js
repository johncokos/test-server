'use strict';

const express = require('express');

const handleHomePage = require('./handlers/home');

const app = express();

// PROBLEM!
// Assigning a hard coded port number will always fail in the cloud
// const PORT = 3000;

// Get the port number from the environment (PORT is always assigned by the cloud)
const PORT = process.env.PORT || 3000;

app.get('/', handleHomePage);

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`);
});