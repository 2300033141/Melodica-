import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Album.css'; // Import the CSS for styling

const Album = ({ album }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());
  const navigate = useNavigate(); // Use for navigation

  const handleSongClick = (song) => {
    if (currentSong && currentSong.src === song.src) {
      // If the same song is clicked, reset the audio
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      // If a new song is clicked, play it
      setCurrentSong(song);
    }
  };

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.src;
      audioRef.current.play().catch((error) => {
        console.error("Playback error:", error);
        setCurrentSong(null);
      });

      audioRef.current.onended = () => {
        setCurrentSong(null); // Reset when song finishes
      };
      audioRef.current.onerror = (error) => {
        console.error("Audio playback error:", error);
        setCurrentSong(null); // Reset on error
      };
    }

    return () => {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
    };
  }, [currentSong]);

  return (
    <div className="album-page-container">
      <div className="album-header">
        <button className="back-button" onClick={() => navigate('/profile')}>Back to Profile</button>
        <div className="album-info">
          <img src={album.cover} alt={album.title} className="album-cover" />
          <h2 className="album-title">{album.title}</h2>
        </div>
      </div>

      <div className="song-list">
        <h3>Songs</h3>
        <ul>
          {album.songs.map((song) => (
            <li key={song.title} className="song-item" onClick={() => handleSongClick(song)}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Audio player controls for the currently selected song */}
      {currentSong && (
        <div className="audio-player">
          <p>Now Playing: {currentSong.title}</p>
          <audio ref={audioRef} controls />
        </div>
      )}
    </div>
  );
};

export default Album;
