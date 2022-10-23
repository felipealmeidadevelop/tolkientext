import * as express from 'express';
import * as cors from 'cors'

import "./database"
import { routes } from './routes/index.routes';

const serverPort = 3333;

const corsOpitions = {
    origin: '*',
};

const app = express();
app.use(cors(corsOpitions));
app.use(express.json());
routes(app)

app.listen(serverPort, () => {

    console.log(` 😋 Server is running on port ${serverPort} `);
})


