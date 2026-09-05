import React from "react";
import "./Navbar.css";

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => setCurrentPage("home")}
      >
        Movie App
      </div>

      <div className="navbar-links">
        <button
          className={currentPage === "home" ? "nav-link active" : "nav-link"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>

        <button
          className={
            currentPage === "favorites"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => setCurrentPage("favorites")}
        >
          Favorites
        </button>
      </div>
    </nav>
  );
}

export default Navbar;