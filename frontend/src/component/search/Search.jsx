import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import {  useContext, useEffect, useState } from "react";
import axios from "axios";
import { myContext } from "../../App";
const Search = () => {
  const url = useContext(myContext);
  const artistType = [
    "All",
    "Linguistics",
    "Singer",
    "Actor",
    "Actress",
    "Author",
    "Poet",
    "Comedian",
    "Painter",
  ];
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [artistName, setArtistName] = useState("");
  const [searches, setSearches] = useState({
    status: "",
    type: "",
  });
  useEffect(() => {
    axios
      .get(`${url}/getAll`)
      .then((result) => {
        setArtists(result.data.message);
      })
      .catch((error) => console.log(error.response.data.message));
  }, []);

  const searchedArtists = artists
    .filter((artist) => {
      return (
        artist.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        artist.status.toLowerCase().includes(searches.status.toLowerCase()) &&
        artist.type.toLowerCase().includes(searches.type.toLowerCase())
      );
    })
    .sort((a, b) => a.fullName.localeCompare(b.fullName));

  const handleSearch = () => {
    axios
      .post(`${url}/api/countSearches`, { artistName })
      .then((result) => console.log(result.data.message))
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <div className="search">
      <div className="search-title text-center my-4">
        <h3>Search</h3>
      </div>
      <div className="container-fluid search-bar ">
        <div className="row pt-3 pb-3 justify-content-center ">
          <div className="name col-12 col-lg-4">
            <label>Artist Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={(e) => setArtistName(e.target.value)}
            />
          </div>
          <div className=" status col-12 col-lg-3">
            <label>Status</label>
            <br />
            <select
              onChange={(e) =>
                setSearches((current) => ({
                  ...current,
                  status: e.target.value,
                }))
              }
            >
              <option value="All">All</option>
              <option value="Current">Current</option>
              <option value="Retired">Retired</option>
            </select>
          </div>
          <div className="type  col-lg-5">
            <div className="row justify-content-between">
              <div className=" col-6">
                <label>Type</label>
                <br />
                <select
                  onChange={(e) =>
                    setSearches((current) => ({
                      ...current,
                      type: e.target.value,
                    }))
                  }
                >
                  {artistType.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="search-btn col-3  mt-3 ">
                <button type="submit" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-results-title text-center my-4">
        <h4>Search Results</h4>
      </div>
      <div className="continer-fluid card-cont">
        <div className="row mb-5 justify-content-around px-lg-4 card-container ">
          {searchedArtists.length == 0 ? (
            <p>No artist found for "{searchTerm}".</p>
          ) : (
            searchedArtists.map((artist, index) => (
              <div className="card  col-9 col-md-3 col-lg-3 m-3 " key={index}>
                <img src={artist.imageSrc} alt="" />
                <div className="text-center m-3">
                  <label>
                    <h5>{artist.fullName}</h5>
                  </label>
                </div>
                <div className="viewbtn row text-center">
                  <a className="col-10 mx-auto py-1" href={artist.history}>
                    View
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;