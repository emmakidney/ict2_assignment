import React from "react";
import BookDetails from "../components/bookDetails";
import SampleBook from "./sampleData";

export default {
  title: "Book Details Page/BookDetails",
  component: BookDetails,
};

export const Basic = () => <BookDetails book={SampleBook} />;
Basic.storyName = "Default";