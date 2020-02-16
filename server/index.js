import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import reactRoutes  from './routes/reactRoutes';
import apiRoutes  from './routes/apiRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);
app.use(reactRoutes);

app.listen(3000);


