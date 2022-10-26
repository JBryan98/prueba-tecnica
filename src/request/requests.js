import axios from "axios";

export const searchRequest = (search, setSong) => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: search },
    headers: {
      "X-RapidAPI-Key": "7fcf611246mshf49a8d063e3ee78p1f9ed7jsneb30bcf7cba8",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then((response) => setSong(response.data.data))
    .catch((error) => console.log(error));
};

export const artistInfo = (artistId, setArtist) => {
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistId}`,
    headers: {
      "X-RapidAPI-Key": "7fcf611246mshf49a8d063e3ee78p1f9ed7jsneb30bcf7cba8",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then((response) => setArtist(response.data.data))
    .catch((error) => console.log(error));
};
