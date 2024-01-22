import express from 'express';
import { PrismaClient } from '@prisma/client/edge'
import route from './route';
const  cors=require('cors')
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors())

app.use(route)
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
