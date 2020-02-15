import path from 'path';
import express from 'express';
import reactRoutes  from './routes/reactRoutes';
import apiRoutes  from './routes/apiRoutes';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);
app.use(reactRoutes);

app.listen(3000);


