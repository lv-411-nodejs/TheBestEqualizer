import express from 'express';
import cors from 'cors';
import routes from './routes/api';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

routes(app);

app.listen(PORT, () => `working on port: ${PORT}`);
