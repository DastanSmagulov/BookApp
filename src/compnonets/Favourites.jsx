import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";
import Book from "./Book";
import { Grid } from "@mui/material";

const Favourites = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

  const favouriteChecker = (id) => {
    const boalean = favourites.some((book) => book.id === id);
    return boalean;
  }; 

  return (
    <div className="favourites">
      {favourites.length > 0 ?favourites.map((book) => (
        <Grid item key={book.id} xs={2.75}>
          <Book
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            book={book}
            favouriteChecker={favouriteChecker}
          />
        </Grid>
      )) : <h1>You don't have any favourite books yet</h1>}
    </div>
  );
};

export default Favourites;
