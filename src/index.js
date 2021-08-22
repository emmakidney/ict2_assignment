import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import BookPage from "./pages/bookDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books/:primary_isbn13" component={BookPage} />
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));