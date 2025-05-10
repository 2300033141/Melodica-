import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import '../styles/Profile.css';

const Profile = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());
  const albums = [
    {
    
      title: "Album 1",
      cover: "./images/dev1.jpeg",
      songs: [
       { title: "Song 1", src:"./audio/Godari Gattu.mp3"},
       { title: "Song 2", src:"./audio/Evarevaro.mp3"},
      ],
    },
    {
      title: "Album 2",
      cover: "./images/dev2.jpeg",
      songs: [
        { title: "Song 1", src:"./audio/Naanaa Hyraanaa.mp3"},
        { title: "Song 2", src:"./audio/Evarevaro.mp3"},
      ],
    },
    {
      title: "Album 3",
      cover: "./images/dev4.jpeg",
      songs: [
        { title: "Song 1", src:"./audio/Godari Gattu.mp3"},
        { title: "Song 2", src:"./audio/Evarevaro.mp3"},
      ],
    },
    {
      title: "Album 4",
      cover: "./images/dev10.jpeg",
      songs: [
        { title: "Song 1", src:"./audio/Godari Gattu.mp3"},
        { title: "Song 2", src:"./audio/Evarevaro.mp3"},
      ],
    },
    {
      title: "Album 5",
      cover: "./images/dev5.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
      ],
    },
    {
      title: "Album 6",
      cover: "./images/dev6.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
      ],
    },
    {
      title: "Album 7",
      cover: "./images/dev9.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
      ],
    },
    {
      title: "Album 8",
      cover: "./images/dev5.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
      ],
    },
    {
      title: "Album 9",
      cover: "./images/dev10.jpeg",
      songs: [
        { title: "Song 1", src: "audio1.mp3" },
        { title: "Song 2", src: "audio2.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 10",
      cover: "./images/dev11.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 11",
      cover: "./images/dev12.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 12",
      cover: "./images/dev13.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 13",
      cover: "./images/dev14.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 14",
      cover: "./images/dev14.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 15",
      cover: "./images/dev15.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
    {
      title: "Album 16",
      cover: "./images/dev16.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 17",
      cover: "./images/dev17.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 18",
      cover: "./images/dev18.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 19",
      cover: "./images/dev19.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 20",
      cover: "./images/dev20.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 21",
      cover: "./images/dev21.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 22",
      cover: "./images/dev22.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 23",
      cover: "./images/dev23.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 24",
      cover: "./images/dev24.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 25",
      cover: "./images/dev25.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },{
      title: "Album 26",
      cover: "./images/dev26.jpeg",
      songs: [
        { title: "Song 1", src: "audio3.mp3" },
        { title: "Song 2", src: "audio4.mp3" },
        // ... more songs
      ],
    },
  
  ];
  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentSong(null);
    audioRef.current.pause();
  };

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.src;
      audioRef.current.play().catch(error => {
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
    <div className="profile-container">
      <div className="sidebar">
        <div className="sidebar-item">
          <h2>John Doe</h2>
        </div>
        <div className="sidebar-item">
    <Link to="/settings">Settings</Link>  {/* Updated Link */}
  </div>
  <div className="sidebar-item">
    <Link to="/privacy">Privacy</Link>  {/* Updated Link */}
  </div>
        <div className="sidebar-item">
          <a href="#logout">Log Out</a>
        </div>
      </div>

      <div className="profile-left">
        <h1>Albums</h1>
        <div className="albums">
          {albums.map((album) => (
            <div className="album" key={album.title} onClick={() => handleAlbumClick(album)}>
              <img src={album.cover} alt={album.title} />
              <div className="album-title">{album.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render song list */}
      {selectedAlbum && (
        <div className="song-list">
          <h2>{selectedAlbum.title} - Songs</h2>
          <ul>
            {selectedAlbum.songs.map((song) => (
              <li key={song.title} onClick={() => handleSongClick(song)}>
                {song.title}
                <audio controls>
                  <source src={song.src} type="audio/mp3" />
                </audio>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;