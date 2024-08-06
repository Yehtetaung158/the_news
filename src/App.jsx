import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WorldNewsPage from "./pages/WorldNewsPage";
import UsNewsPage from "./pages/UsNewsPage";
import ScienceNewsPage from "./pages/ScienceNewsPage";
import ArtNewsPage from "./pages/ArtNewsPage";
import Nav from "./component/navComponents/Nav";
import Container from "./component/Container";
import NewsDetailPage from "./pages/detail/NewsDetailPage";

const App = () => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<NewsDetailPage />} />
        <Route path="/worldnews" element={<WorldNewsPage />} />
        <Route path="/worldnews/:id" element={<NewsDetailPage />} />
        <Route path="/usnews" element={<UsNewsPage />} />
        <Route path="/usnews/:id" element={<NewsDetailPage />} />
        <Route path="/sciencenews" element={<ScienceNewsPage />} />
        <Route path="/sciencenews/:id" element={<NewsDetailPage />} />
        <Route path="/artnews" element={<ArtNewsPage />} />
        <Route path="/artnews/:id" element={<NewsDetailPage />} />
      </Routes>
    </Container>
  );
};

export default App;
