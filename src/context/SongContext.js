import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export function useSongContext() {
  return useContext(SongContext);
}

export function SongContextProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeControl, setVolumeControl] = useState(100);
  console.log(isPlaying);

  const getSongData = (song, index) => {
    setCurrentIndex(index);
    setCurrentSong(song);
  };
  const togglePlay = () => {
    console.log("clickeado");
    setIsPlaying(!isPlaying);
  };
  

  return (
    <SongContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        currentSong,
        setCurrentSong,
        getSongData,
        isPlaying,
        setIsPlaying,
        togglePlay,
        volumeControl,
        setVolumeControl
      }}
    >
      {children}
    </SongContext.Provider>
  );
}
