import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("pages/Home"));
const Continents = React.lazy(() => import("pages/Continents"));
const Loading = () => <p>Loading ...</p>;

const routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continents/>} />
      </Routes>
    </React.Suspense>
  );
};

export default routes;
