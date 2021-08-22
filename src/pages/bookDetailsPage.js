import React, {useState, useEffect}  from "react";
import BookHeader from "../components/headerBook/";
import BookDetails from "../components/bookDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import img from "../images/book-cover-placeholder.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const BookPage = (props) => {
  const classes = useStyles();
  const { title } = props.match.params;
  const [book, setBook] = useState(null);
  const image = img;

  useEffect(() => {
    fetch(
        `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=${title}&api-key=${process.env.REACT_APP_NYT_KEY} `
    )
      .then((res) => {
        return res.json();
      })
      .then((book) => {
        // console.log(book)
        setBook(book);
      });
  }, [title]);


  return (
    <>
      {book ? (
        <>
          <BookHeader book={book} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div className={classes.root}>
                <GridList
                  cellHeight={500}
                  className={classes.gridList}
                  cols={1}
                >
                  {(image) => (
                    <GridListTile
                      key={image}
                      className={classes.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`${book.title}`}
                        alt={image}
                      />
                    </GridListTile>
                  )}
                </GridList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <BookDetails book={book} />
              <img
              src={`${book.title}`}
              alt={image}
          />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default BookPage;