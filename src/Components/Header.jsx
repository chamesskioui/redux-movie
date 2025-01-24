import React, { useState } from 'react'
import Addfilm from './Addfilm'

function Header() {
  const [show,setshow]=useState(false)


  return (
    
    <>
  
  <meta charSet="UTF-8" />
  <title>Movie App</title>
  <link rel="stylesheet" href="styles.css" />
  <nav className="movie-navbar">
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="logo-icon"
      >
        <path
          fillRule="evenodd"
          d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v12.75a.375.375 0 0 0 .375.375h17.25a.375.375 0 0 0 .375-.375V5.625a.375.375 0 0 0-.375-.375H3.375a.375.375 0 0 0-.375.375Zm6.75 3.375a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 3.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
          clipRule="evenodd"
        />
      </svg>
      MovieMate
    </div>
    <ul className="nav-links">
      <li>
        <a href="https://example.com/home">Home</a>
      </li>
      <li>
        <a href="https://example.com/movies">Movies</a>
      </li>
      <li>
        <a href="https://example.com/tv-shows">TV Shows</a>
      </li>
      <li>
        <a href="https://example.com/watchlist">Watchlist</a>
      </li>
    </ul>
    <div className="nav-actions">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="search-icon"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <button  className="login-button">Search</button>
      <button  onClick={()=>setshow(!show) }  className="login-button">Add film</button>
      {show==true? <Addfilm/>:null}
    </div>
  </nav>
</>
  )
}

export default Header