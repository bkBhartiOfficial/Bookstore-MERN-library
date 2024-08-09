import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        score: {
            type: String,
            required: false,
        },
        publishYear: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        
    },
    {
        timeStamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);