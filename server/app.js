require('dotenv').config();
const express = require('express');

const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');

const PORT = process.env.PORT || 4000;
const app = express();

serverConfig(app);

// маршрутизация
app.use('/api', indexRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
