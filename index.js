const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./api/recursos/productos/productos.routes');

const app = express();

app.use(bodyParser.json());
app.use('/productos', productRouter);

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.listen(3000, () => {
  console.log('Init server');
});
