'use strict';

function handleHomePage(req, res) {
  res.status(200).send("I now work from the handlers folder");
}

module.exports = handleHomePage;