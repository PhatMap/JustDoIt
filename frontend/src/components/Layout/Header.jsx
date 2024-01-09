import React, { useState, useRef, useEffect } from "react";
import Search from "./Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/16/solid";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const audioRef = useRef();
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    const newPlayValue = !play;
    setPlay(newPlayValue);
    if (newPlayValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <nav className="bg-amber-200 sticky top-0 z-10">
      <div className="container mx-auto flex justify-around items-center">
        {play ? (
          <img src="../images/toothless-dragon-toothless-export.gif" />
        ) : (
          <img src="../images/toothless-dragon-toothless-export.png" />
        )}
        {play ? (
          <SpeakerWaveIcon onClick={handlePlay} className="w-4" />
        ) : (
          <SpeakerXMarkIcon onClick={handlePlay} className="w-4" />
        )}
        <audio
          ref={audioRef}
          src="../images/toothless-dance-made-with-Voicemod-technology.mp3"
          loop
          hidden={true}
        />
        <Search />
        <div className="space-x-4">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            Shop
          </a>
          <a href="#" className="text-black">
            About
          </a>
          <a href="#" className="text-black">
            Contact
          </a>
        </div>
        <div>
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="w-10 h-10 bg-orange-400 rounded-full"
          ></button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
