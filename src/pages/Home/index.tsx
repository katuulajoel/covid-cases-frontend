import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <p style={{ marginTop: "70px" }}>
      Home <Link to="continents">Continents</Link>
    </p>
  );
};
export default Home;
