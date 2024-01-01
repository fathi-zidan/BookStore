// import 'dotenv/config';
import {errorHandler} from '../middlewares/errorMiddleware.js'
import express from 'express';
import cors from 'cors'
import bookRoute from '../routes/bookRoute.js'

const app = express();

app.use(express.json());

// Middleware to handle CORS issues
app.use(cors());

//Error handling Middleware
app.use(errorHandler);

app.use('/books',bookRoute);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})