import React, { useState } from "react";

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1", url: "song1.mp3" },
    { id: 2, title: "Song 2", artist: "Artist 2", url: "song2.mp3" },
    { id: 3, title: "Song 3", artist: "Artist 3", url: "song3.mp3" },
  ];

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="music-player">
      <h2>Music Player</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => playSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
      {currentSong && (
        <div>
          <h3>Now Playing: {currentSong.title}</h3>
          <audio controls src={currentSong.url} />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
