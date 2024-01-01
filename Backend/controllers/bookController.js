import STATUS_CODE from "../constants/statusCode.js";
import { readBooksFile, writeBooksToFile } from "../models/bookModel.js";
import { v4 as uuidv4 } from 'uuid'

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await readBooksFile();
        return res.status(STATUS_CODE.OK).send(books);
    } catch (e) {
        next(e);
    }

}

export const getSingleBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const books = readBooksFile();
        const book = books.find((book) => book.id == bookId);
        if (!book) {
            return res.status(STATUS_CODE.NOT_FOUND).send("The Book is not found");
        }
        return res.status(STATUS_CODE.OK).send(book);

    } catch (e) {
        next(e);
    }
}

export const deleteBook = (req, res, next) => {
    try {
        let id = req.params.id;
        const books = readBooksFile();
        const bookIndex = books.findIndex((book) => book.id == id);
        if (bookIndex == -1) {
            return res.status(STATUS_CODE.NOT_FOUND).send("the Book is not found")
        }
        books.splice(bookIndex, 1);
        writeBooksToFile(books);
        return res.status(STATUS_CODE.OK).send(`The Deleted book was ${JSON.stringify(books[bookIndex])}`)
    } catch (e) {
        next(e);
    }

}
export const updateBooks = (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedBookData = req.body;
        const books = readBooksFile();
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1) {
            return res.status(STATUS_CODE.NOT_FOUND).send("Book was not found");
        }

        books[bookIndex] = {
            ...books[bookIndex],
            ...updatedBookData
        };

        writeBooksToFile(books);
        return res.status(STATUS_CODE.OK).send(books[bookIndex]);
    } catch (e) {
        next(e);
    }
};

export const createBook = (req, res, next) => {
    try {

        const newBookData = req.body;

        if (!newBookData.title || !newBookData.author || !newBookData.genre) {
            return res.status(STATUS_CODE.BAD_REQUEST).send("Title, author, and genre are required fields.");
        }

        const books = readBooksFile();
        const id = uuidv4();

        const newBook = {
            id: id,
            ...newBookData
        }
        books.push(newBook);
        writeBooksToFile(books);
        return res.status(STATUS_CODE.OK).send(newBook);
    } catch (e) {
        next(e);
    }

}
