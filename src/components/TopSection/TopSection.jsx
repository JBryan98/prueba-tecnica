import React from "react";
import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./TopSection.css";

const TopSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchInput.trim()){
      alert("¡No hay nada que buscar!")
    }
    else{
      navigate("/search/" + searchInput);
    }
  };

  return (
    <div className="top-container">
      <div className="header-section">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FaSearch className="search-icon" onClick={handleSubmit}/>
        </form>
        <div className="user-container">
          <FaUser className="user-icon" />
          <h3>Bryan C.</h3>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
