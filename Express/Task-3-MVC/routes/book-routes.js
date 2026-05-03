import express from "express"
import {
  handleGetAllBooks,
  handleGetSingleBook,
  handleAddBook,
  handleUpdateBook,
  handleDeleteBook,
} from "../controllers/book-controllers.js"
const router = express.Router()


//!Routes related to Books
router.get("/all-books",handleGetAllBooks)

router.get("/book/:id",handleGetSingleBook)

router.post("/add-book",handleAddBook)

router.put("/update-book/:id",handleUpdateBook);

router.delete("/delete-book/:id",handleDeleteBook);






export default router;