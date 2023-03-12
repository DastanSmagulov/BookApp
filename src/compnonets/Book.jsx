import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Book(props) {
  return (
    <Card sx={{marginTop:10 }}>
      <Typography sx={{textAlign:"center", maxWidth:250}} >{props.book.title}</Typography>
      <CardMedia
        sx={{ width: 250,
  height: 300, transition: "all 0.2s ease", "&:hover": {transform: "scale(1.1)"} }}
        image={props.book.image_url}
        alt="book-image"
      ></CardMedia>
      <Button onClick={()=>props.addToFavourites(props.book)} size="small">Add to Favourites</Button>
    </Card>
  );
}
