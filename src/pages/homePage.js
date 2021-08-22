import React, { useState, useEffect } from "react"; 
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
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch( 
          `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${process.env.REACT_APP_NYT_KEY} `
        )
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          return json.results;
        })
        .then((book) => {
          setBook(book);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={"Home Page"} />
        </Grid>
        <Grid item container spacing={5}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FilterCard />
          </Grid>
          <BookList book={book}></BookList>
        </Grid>
      </Grid>
    );
  }


export default BookListPage;