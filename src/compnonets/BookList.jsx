import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL } from "../API";
import { Grid} from "@mui/material";
import axios from "axios";
import Book from "./Book";
import { useAppContext } from "./context/appContext";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const {favourites, addToFavourites, removeFromFavourites} = useAppContext()

  // console.log(favourites)

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bookList">
      {books.map((book) => (
        <Grid item key={book.id} xs={2.75}>
          <Book addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites}  book = {book}/>
        </Grid>
      ))}
    </div>
  );
};

export default BookList;
