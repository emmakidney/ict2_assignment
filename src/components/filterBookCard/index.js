import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import img from '../../images/book.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgb(208, 211, 217)",
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterBookCard(props) {
  const classes = useStyles();

  const genres = [
    {id: 1, name: "Best Sellers"},
    {id: 2, name: "Ages 8 to 12"},
    {id: 3, name: "Ages 10 to 18"},
    {id: 3, name: "Good Value"}
  ]

  useEffect(() => {
      fetch( 
        "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?age-group={name}&api-key=" 
        + process.env.REACT_APP_NYT_KEY
      )
      .then(res => res.json())
      .then(json => {
        // console.log(json.genres) 
        return json.title
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)  
  }
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter books.
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter books.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}