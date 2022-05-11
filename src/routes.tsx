import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("pages/Home"));
const CountryDetails = React.lazy(() => import("pages/Country"));
const Loading = () => <p>Loading ...</p>;

const routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetails/>} />
      </Routes>
    </React.Suspense>
  );
};

export default routes;
