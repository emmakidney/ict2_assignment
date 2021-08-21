import React from "react";
import Header from "../components/headerBookList";
import FilterCard from "../components/filterBookCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BookList from "../components/bookList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const BookListPage = (props) => {
  const classes = useStyles();
  const books = props.books;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard />
        </Grid>
        <BookList books={books}></BookList>
      </Grid>
    </Grid>
  );
};
export default BookListPage;