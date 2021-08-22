import React from "react";
import Book from "../bookCard/";
import Grid from "@material-ui/core/Grid";

const BookList = (props) => {
  let bookCard = props.book.map((m) => (
    <Grid key={m.title} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Book key={m.title} book={m} />
    </Grid>
  ));
  return bookCard;
};

export default BookList;