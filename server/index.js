import express from 'express';
import path from 'path';
import cors from 'cors';
import envConfig from './configs/env.config';
import { connect } from './db/index';
import routes from './routes';
import { createAdmin, createUsers } from './db/initDb';

const app = express();

app.use(cors({
  origin: envConfig.FRONT_DOMAIN,
  exposedHeaders: [ 'access-token' ],
}));

connect();

createAdmin();
createUsers();

app.listen(envConfig.PORT, () => (
  console.error(`Node listening on port ${envConfig.PORT}`)
));

//app.use(express.static(path.resolve(__dirname, '../client/build')));

// All remaining requests return the React app, so it can handle routing.
app.use('/', routes);

