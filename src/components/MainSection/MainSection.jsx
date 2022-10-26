import React from "react";
import "./MainSection.css";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import BottomPlayer from "../BottomPlayer/BottomPlayer";
import { searchRequest } from "../../request/requests";
import { useSongContext } from "../../context/SongContext";

const MainSection = ({ mainArtist }) => {
  const [data, setData] = useState([]);
  console.log(data)

  const {getSongData, togglePlay, currentSong} = useSongContext();

  useEffect(() => {
    searchRequest(mainArtist, setData);
  }, [mainArtist]);


  //Hero data
  const heroMusic = data[0];

  console.log(currentSong)


  if (data && heroMusic) {
    return (
      <>
        <div className="main-container">
          <div className="hero-container">
            <div className="artist-img">
              <img src={heroMusic.artist.picture_medium} alt="" />
            </div>
            <div className="description-container">
              <div className="background-img">
                <img src={heroMusic.album.cover_xl} alt="" />
              </div>
              <div className="hero-gradient"></div>
              <div className="artist-description">
                <h3>{heroMusic.artist.name}</h3>
                <div className="artist-subtitle">
                  <p>Lo mejor de {heroMusic.artist.name}</p>
                  <span>321 323 seguidores</span>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="button-container">
                  <button
                    className="btn-reproducir"
                    onClick={() => {getSongData(heroMusic, 0); togglePlay()}}
                  >
                    Reproducir
                  </button>
                  <button className="btn-seguir">Seguir</button>
                  <BsThreeDots className="triple-dot" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="result-title">RESULTADOS</h1>
          <div className="result-container">
            {data.map((data, index) => (
              <div className="result-card" key={data.id}>
                <div className="card-img">
                  <img src={data.album.cover_medium} alt="" />
                  <div className="card-play">
                    <FaPlay
                      className="play-icon"
                      onClick={() => {getSongData(data, index); togglePlay()}}
                    />
                  </div>
                </div>
                <h3>{data.title}</h3>
                <p>{data.artist.name}</p>
              </div>
            ))}
          </div>
        </div>
        {currentSong.id === undefined ? null :  <BottomPlayer  data={data}/>}
      </>
    );
  }
};

export default MainSection;
