import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import LoginPage from "./LoginPage/LoginPage";
import MoviesListPage from "./MoviesListPage/MoviesListPage";
import MovieDetailPage from "./MoviesDetailPage/MoviesDetailPage";
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
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
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
