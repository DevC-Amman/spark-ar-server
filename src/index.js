import express from 'express';
import cors from 'cors';
import { names } from './names';

const app = express();
app.use(cors());

const _selectRandomName = async () => names[Math.floor(Math.random() * names.length)];

app.use('/arab-scientists', async (req, res) => {
  res.status(200).send({ name: await _selectRandomName() });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('your server is up and running');
});
