import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [favorites, setFavorites] = useState([]);

  const movies = [
    {
      id: 1,
      title: "Spider Man",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    },
    {
      id: 2,
      title: "The Hero",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    },
    {
      id: 3,
      title: "The Warrior",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500",
    },
    {
      id: 4,
      title: "Dark Night",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
    },
    {
      id: 5,
      title: "Adventure",
      year: "2020",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
    },
    {
      id: 6,
      title: "The Mystery",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
    },
    {
      id: 7,
      title: "Lost World",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
      id: 8,
      title: "Final Mission",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500",
    },
    {
      id: 9,
      title: "The Kingdom",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500",
    },
    {
      id: 10,
      title: "Silent Night",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500",
    },
    {
      id: 11,
      title: "Dream City",
      year: "2020",
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500",
    },
    {
      id: 12,
      title: "The Journey",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
      id: 13,
      title: "Secret Island",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
    },
    {
      id: 14,
      title: "Future World",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500",
    },
    {
      id: 15,
      title: "Last Hero",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    },
  ];

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    setFavorites(savedFavorites);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="main-container">
        {currentPage === "home" ? (
          <>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="button">Search</button>
            </div>

            {filteredMovies.length > 0 ? (
              <div className="movie-grid">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onFavoriteChange={setFavorites}
                  />
                ))}
              </div>
            ) : (
              <div className="no-movies">
                <h2>No Movies Found</h2>
                <p>Try searching with another movie name.</p>
              </div>
            )}
          </>
        ) : (
          <section className="favorites-section">
            <h1>My Favorites</h1>

            {favorites.length === 0 ? (
              <div className="empty-favorites">
                <h2>No Favorite Movies Yet</h2>

                <p>
                  Go to Home and click the heart button to add a movie.
                </p>

                <button
                  type="button"
                  onClick={() => setCurrentPage("home")}
                >
                  Browse Movies
                </button>
              </div>
            ) : (
              <div className="movie-grid">
                {favorites.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onFavoriteChange={setFavorites}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;