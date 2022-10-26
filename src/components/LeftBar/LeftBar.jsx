import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./LeftBar.css";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  isActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow= ''

  return (
    <>
      {!isActive && (
        <div className="responsive-icons">
          <FaBars className="bar-icon" onClick={toggleActive} />
        </div>
      )}
      <div className={!isActive ? "left-bar-container" : "left-bar-container translate"}>
        <div className="close-icon">
          {isActive && <MdClose onClick={toggleActive} className="left-bar-icon" />}
        </div>
        <Link to="/">
          <div className="logo-container">
            <img
              src="http://jbryan98.github.io/prueba-tecnica/images/foxbel-music@3x.png"
              alt="LOGO"
            />
          </div>
        </Link>
        <div className="left-menu">
          <div className="libreria-container">
            <h3>Mi libreria</h3>
            <Link className="active">Recientes</Link>
            <Link>Artistas</Link>
            <Link>Canciones</Link>
            <Link>Estaciones</Link>
          </div>
          <div className="playlist-container">
            <h3>Playlist</h3>
            <Link>Metal</Link>
            <Link>Para bailar</Link>
            <Link>Rock 90s</Link>
            <Link>Baladas</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
