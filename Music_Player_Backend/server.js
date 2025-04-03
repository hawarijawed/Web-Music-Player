import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongDB.js';
import connectCloudinary from './src/config/Cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

//app config

const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();
//Middlewares
app.use(express.json());
app.use(cors());//fronted and backend connection
app.use(express.urlencoded({ extended: true }));
// Initializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);
app.get('/', (req, res)=> res.send('API IS WORKING'));

app.listen(port, ()=>console.log(`Servers is running on ${port}`)
);