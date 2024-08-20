import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors(
    {
        origin: 'https://blog-web-app-sosz.vercel.app', // Replace with your client's URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        credentials: true // Allow cookies and other credentials
    }
));
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true })); // this is use for encode url request
app.use(cookieParser());



// routes import 
import userRouter from './routes/authRoute.js'
import postRoute from './routes/postRoute.js'
app.use('/api/v1/auth', userRouter);
app.use('/api/v1', postRoute);

export { app }