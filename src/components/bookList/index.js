import React from "react";
import Book from "../bookCard/";
import Grid from "@material-ui/core/Grid";

const BookList = (props) => {
  let bookCards = props.books.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Book key={m.id} book={m} />
    </Grid>
  ));
  return bookCards;
};

export default BookList;