import React from "react";
import BookListHeader from "../components/headerBookList";

export default {
  title: "Home Page/Header",
  component: BookListHeader,
};

export const Basic = () => <BookListHeader title={'Discover Books'} />;

Basic.storyName = "Default";