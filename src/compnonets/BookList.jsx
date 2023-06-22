import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL } from "../API";
import { Grid} from "@mui/material";
import axios from "axios";
import Book from "./Book";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./context/appContext";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const {favourites, addToFavourites, removeFromFavourites} = useAppContext()

  const navigate = useNavigate()

  const favouriteChecker = (id) => {
    const boalean = favourites.some(book => book.id === id)
    return boalean
  } 

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
          <Book addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites}  book = {book} favouriteChecker={favouriteChecker} navigate = {navigate}/>
        </Grid>
      ))}
    </div>
  );
};

export default BookList;
