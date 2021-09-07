import "./styles.css";

import { useState } from "react";
import songsData from "./songs.json";

export default function App() {
  var [genre, setGenre] = useState(songsData.lofi);

  function bollywoodMusicClickHandler() {
    setGenre(songsData.bollywood);
  }

  function englishMusicClickHandler() {
    setGenre(songsData.english);
  }

  function qawwaliMusicClickHandler() {
    setGenre(songsData.qawwali);
  }

  function bandsMusicClickHandler() {
    setGenre(songsData.bands);
  }

  function evergreenMusicClickHandler() {
    setGenre(songsData.evergreen);
  }

  return (
    <div className="App">
      <a
        id="github-repo"
        title="Source code for this app"
        href="https://github.com/bishnoimukesh"
      >
        <i className="fab fa-github"></i>
      </a>
      <h1>Music Recommendation</h1>
      <p id="app-details">Checkout My Playlist. Select any Genre to listen!</p>

      <div className="genres">
        <button id="lofi" onClick={bollywoodMusicClickHandler}>
          Top Bollywood
        </button>
        <button id="remix" onClick={englishMusicClickHandler}>
          Top English
        </button>
        <button id="evergreen" onClick={qawwaliMusicClickHandler}>
          Qawwali
        </button>
        <button id="zumba-gym" onClick={bandsMusicClickHandler}>
          Bands
        </button>
        <button id="evergreen" onClick={evergreenMusicClickHandler}>
          Evergreen
        </button>
      </div>
      <hr />

      <div className="fav-playlist">
        <ul className="playlist">
          {genre.map(function (playlist) {
            return (
              <a href={playlist.link}>
                <li
                  key={playlist.name}
                >
                  <div className="playlist-details">
                    <h1 id="playlis-name">{playlist.name}</h1>
                    <div id="artist">{playlist.artist}</div>
                    <div id="genre">Genre: {playlist.genre}</div>
                    <div id="rating">{playlist.ratings}</div>
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
