const express = require('express');
const app = express();
var cors = require('cors')
const apiRoutes = require('./api');

const port = 3333;

app.use(cors());
app.use('/api', apiRoutes);

app.get('/',(req, res) => {res.json({mesg:"hello from backend"})})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
