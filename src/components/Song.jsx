
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Album from "./Album";

const Song = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/album/:title" element={<Album />} />
            </Routes>
        </Router>
    );
  };
  export default Song;