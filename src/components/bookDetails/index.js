import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PrintIcon from '@material-ui/icons/Print';
import NavigationIcon from "@material-ui/icons/Navigation";
import CreateIcon from '@material-ui/icons/Create';
import CakeIcon from '@material-ui/icons/Cake';
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const BookDetails = (props) => {
  const classes = useStyles();
  const book = props.book

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {book.description}
      </Typography>


      <Paper component="ul" className={classes.root}>
        <Chip
          icon={<AttachMoneyIcon />}
          label={`Price: ${book.price}`}
        />
        <Chip
          icon={<PrintIcon />}
          label={`${book.publisher}`}
        />
        <Chip
          icon={<CakeIcon />}
          label={`${book.age_group}`}
        />
        <Chip 
        icon={<CreateIcon />}
        label={`Author: ${book.author}`} />
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      </>
  );
};
export default  BookDetails ;