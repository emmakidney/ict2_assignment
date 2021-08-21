import React from "react";
import FilterBookCard from "../components/filterBookCard";

export default {
  title: "Home Page/FilterBookCard",
  component: FilterBookCard,
};

export const Basic = () => {
  return <FilterBookCard />;
};
Basic.storyName = "Default";