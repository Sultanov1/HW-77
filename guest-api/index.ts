import express from 'express';
import cors from 'cors';
import fileDb from './fileDb';
import config from './config';
import commentsRouter from './routers/comments';

const app = express();
const port = 8000;

app.use(cors(config.corsOptions));
app.use(express.json());
app.use('/comments', commentsRouter)

const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

run().catch(console.error);