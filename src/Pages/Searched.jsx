import React from "react";
import { useParams } from "react-router-dom";
import MainSection from "../components/MainSection/MainSection";

const Searched = () => {
  const { input } = useParams();
  return <MainSection mainArtist={input} />;
};

export default Searched;
