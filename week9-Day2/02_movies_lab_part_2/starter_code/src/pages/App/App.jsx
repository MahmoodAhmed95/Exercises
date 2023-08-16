import { useState } from "react";
import { movies } from "../../data.js";
import NavBar from "../components/NavBar/NavBar";
import LoginPage from "./LoginPage/LoginPage";
import MoviesListPage from "./MoviesListPage/MoviesListPage";
import MovieDetailPage from "./MovieDetailPage/MovieDetailPage.jsx";
import ActorListPage from "./ActorListPage/ActorListPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
