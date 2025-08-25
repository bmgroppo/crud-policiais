const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/crud_policiaisRoutes');

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});