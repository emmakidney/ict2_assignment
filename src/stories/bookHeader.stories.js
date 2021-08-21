import React from "react";
import BookHeader from "../components/headerBook";
import SampleBook from "./sampleData";

export default {
  title: "Book Details Page/BookHeader",
  component: BookHeader,
};

export const Basic = () => <BookHeader book={SampleBook} />;
Basic.storyName = "Default";