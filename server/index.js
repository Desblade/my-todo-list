const express = require('express');
const router = require('./routers/index');
const { db } = require('./db');

const app = express();

const PORT = process.env.PORT

db.migrate.latest();

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(`Не удалось подключиться к бд и запустить сервер: ${e}`);
  }
};

start();
