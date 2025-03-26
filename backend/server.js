import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/mongoosedb.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


const port = process.env.PORT || 5002; // 5001 port instead of 5000

connectDB();

const app = express();


app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
