import React from "react";
import BookCard from "../components/bookCard";
import SampleBook from "./sampleData";

export default {
  title: "Home Page/BookCard",
  component: BookCard,
};

export const Basic = () => {
  return (
    <BookCard
      book={SampleBook}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoCover = { ...SampleBook, list_image: undefined };
  return (
    <BookCard
      book={sampleNoCover}
    />
  );
};
Exceptional.storyName = "exception";