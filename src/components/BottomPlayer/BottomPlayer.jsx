import React, { useEffect, useRef, useState } from "react";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPlay, FaPause, FaVolumeOff } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import "./BottomPlayer.css";
import { useSongContext } from "../../context/SongContext";

const BottomPlayer = ({ data }) => {
  const  [isMuted, setIsMuted] = useState(false);
  const {
    currentSong,
    setCurrentSong,
    currentIndex,
    setCurrentIndex,
    isPlaying,
    togglePlay,
    setVolumeControl,
    volumeControl
  } = useSongContext();

  const audioRef = useRef(null);

  const handleVolume = (e) => {
    setVolumeControl(e.target.value);
    audioRef.current.volume = volumeControl / 100;
    audioRef.current.volume === 0 ? setIsMuted(true) : setIsMuted(false);
  }

  console.log(volumeControl)


  const nextSong = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentSong(data[currentIndex + 1]);
  };

  const prevSong = () => {
    setCurrentIndex(currentIndex - 1);
    setCurrentSong(data[currentIndex - 1]);
  };

  const muteSong = () => {
    setIsMuted(true)
    audioRef.current.muted = true
  }

  const unmuteSong = () => {
    setIsMuted(false)
    audioRef.current.muted = false
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      audioRef.current.volume = volumeControl / 100;
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex, volumeControl]);

  return (
    <div className="bottom-bar-container">
      <audio ref={audioRef} src={currentSong.preview}></audio>
      <div className="song-info">
        <div className="album-cover">
          <img src={currentSong.album.cover_medium} alt="" />
        </div>
        <div className="song-description">
          <p className="song-title">{currentSong.title}</p>
          <p className="song-album">
            {currentSong.artist.name} - {currentSong.album.title}
          </p>
        </div>
      </div>
      <div className="options">
        <div className="prev-button">
          {currentIndex !== 0 ? (
            <button onClick={() => prevSong()} className="options-button">
              <MdSkipPrevious />
            </button>
          ) : (
            <button
              onClick={() => prevSong()}
              className="options-button"
              disabled
            >
              <MdSkipPrevious color="#ffffff90"/>
            </button>
          )}
        </div>
        {isPlaying === false ? (
          <button className="circle" onClick={() => togglePlay()}>
            <FaPlay />
          </button>
        ) : (
          <button className="circle" onClick={() => togglePlay()}>
            <FaPause />
          </button>
        )}
        <div className="next-button">
          {currentIndex !== data.length - 1 ? (
            <button onClick={() => nextSong()} className="options-button">
              <MdSkipNext />
            </button>
          ) : (
            <button
              onClick={() => nextSong()}
              className="options-button"
              disabled
            >
              <MdSkipNext color="#ffffff90"/>
            </button>
          )}
        </div>
      </div>
      <div className="vol-container">
        <div className="vol-bar">
          <input type="range" value={volumeControl} onChange={handleVolume}/>
        </div>
        <div className="vol-icon">
          {!isMuted ? <AiFillSound onClick={muteSong}/> : <FaVolumeOff onClick={unmuteSong}/>}
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
