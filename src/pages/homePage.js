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
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");

    const genreId = Number(genreFilter);

    let displayedBooks = book
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  }; 

  const addToFavorites = (bookId) => {
    const updatedBooks = book.map((m) =>
      m.title === bookId ? { ...m, favorite: true } : m
    );
    setBook(updatedBooks);
  };

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
            <FilterCard
                onUserInput={handleChange}
                titleFilter={nameFilter}
                genreFilter={genreFilter}
             />
          </Grid>
          <BookList book={displayedBooks} selectFavorite={addToFavorites} />
      </Grid>
      </Grid>
    )
  }


export default BookListPage;