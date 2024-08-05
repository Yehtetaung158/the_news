import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WorldNewsPage from "./pages/WorldNewsPage";
import UsNewsPage from "./pages/UsNewsPage";
import ScienceNewsPage from "./pages/ScienceNewsPage";
import ArtNewsPage from "./pages/ArtNewsPage";
import Nav from "./component/navComponents/Nav";
import Container from "./component/Container";

const App = () => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/worldnews" element={<WorldNewsPage />} />
        <Route path="/usnews" element={<UsNewsPage />} />
        <Route path="/sciencnews" element={<ScienceNewsPage />} />
        <Route path="/artnews" element={<ArtNewsPage />} />
      </Routes>
    </Container>
  );
};

export default App;
