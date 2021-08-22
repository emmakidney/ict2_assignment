import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import BookPage from "./pages/bookDetailsPage";
import FavouriteBooksPage from "./pages/favouriteBooksPage";


const App = () => {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books/favorites">Favorites</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/books/favourites" component={FavouriteBooksPage} />
          <Route path="/books/:title" component={BookPage} />
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));