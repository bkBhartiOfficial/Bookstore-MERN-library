import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware to handle cors policy
app.use(cors());

/* 
{
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}
//use this inside the cors function to get more control over cors , default is all (*)
*/

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('You are on the backend website, re-check your url!');
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });
