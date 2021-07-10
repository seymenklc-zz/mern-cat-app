import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import postRoutes from './routes/post-routes.js';

dotenv.config();
const app = express();

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb' }));
app.use(cors({ origin: '*' }));
connectDB();

app.use('/api', postRoutes);

app.get('/', (req, res) => {
    res.send('Misha The Cat API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));