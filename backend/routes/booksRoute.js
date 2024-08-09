import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router()

//route to save a new book
router.post('/', async (request, response) => {
    try {
        // Check if the request body is an array
        if (Array.isArray(request.body)) {
            // Handle multiple book entries
            const books = request.body;

            // Validate each book in the array
            for (let book of books) {
                if (!book.title || !book.author) {
                    return response.status(400).send({
                        message: 'Each book must have a title and author!',
                    });
                }
            }

            // Save all valid books to the database
            const savedBooks = await Book.insertMany(books);
            return response.status(201).send(savedBooks);
        } else {
            // Handle a single book entry
            const { title, author, score, publishYear, description } = request.body;

            if (!title || !author) {
                return response.status(400).send({
                    message: 'Title and Author fields are mandatory!',
                });
            }

            const newBook = {
                title,
                author,
                score,
                publishYear,
                description,
            };

            const book = await Book.create(newBook);
            return response.status(201).send(book);
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


//route to get all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message }); 
    }

});

//route to get 1 book data by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message }); 
    }

});

//route for updating books
router.put('/:id', async (request, response) => {
    try {
        if (
        !request.body.title || !request.body.author || !request.body.publishYear
    ){
        return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
        return response.status(404).json({message: 'Book not found :('});        
    }
    return response.status(200).send({message: 'Book updated successfully'});


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message }); 
    }

});

//route for deleting a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);
    if (!result) {
        return response.status(404).json({message: 'Book not found :('});        
    }
    return response.status(200).send({message: 'Book deleted successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message }); 
    }

});

export default router;