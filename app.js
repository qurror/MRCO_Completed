const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  res.send('Hello World Petushara_NEW!');
=======
>>>>>>> f723eb5 (new petushara)
  res.send('Hello Petushara!');
=======
  res.send('Hello World Petushara_NEW_FEATURE!');
>>>>>>> da79f12 (fixing main)
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});
