import React, {useState, useEffect}  from "react";
import BookHeader from "../components/headerBook/";
import BookDetails from "../components/bookDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import image from "../images/book-cover-placeholder.png";

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
  const title = props.match.params;
  const [book, setBook] = useState(null);
  const dataImage = [{ img: image }] 

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
                   {dataImage.map((image) => (
                    <GridListTile
                      key={image.file_path}
                      className={classes.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80}`}
                        alt={dataImage.img}
                      />
                    </GridListTile>
                   ))}
                </GridList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <BookDetails book={book} />
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