import abeba from "../../assets/abebaHaile.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const artistType=[ "All", "Singer","Musician","Actor/Actress","Author", "Poet","Painter"]
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searches, setSearches] = useState({
status:"All", type:"All"
  });
console.log(searches)
  useEffect(() => {
    axios
      .get("http://localhost:3001/getAll")
      .then((result) => setArtists(result.data.message))
      .catch((error) => console.log(error.response.data.message));
  }, []);

  const searchedArtists = artists
    .filter(
      (artist) => {
        const names = artist.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        const sta = artist.status.toLowerCase().includes(searches.status.toLowerCase()) 
        const ty = artist.type.toLowerCase().includes(searches.type.toLowerCase())
        return names || sta || ty;
      }
    )
    .sort((a, b) => a.fullName.localeCompare(b.fullName));

  
  //const artistStatus=artists.filter(status=>status.status.toLowerCase())
  return (
    <div className="search">
      <div className="search-title text-center my-4">
        <h3>Search</h3>
      </div>
      <div className="container-fluid search-bar ">
        <div className="row pt-3 pb-3 justify-content-center">
          <div className="name col-12 col-lg-4">
            <label for="">Artist Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className=" status col-12 col-lg-3">
            <label for="">Status</label>
            <br />
            <select onChange={e=>setSearches(current=>({...current,status:e.target.value}))}>
              <option value="All">All</option>
              <option value="Alive" href="">
                Alive
              </option>
              <option value="Dead">Dead</option>
            </select>
          </div>
          <div className="type  col-lg-5">
            <div className="row justify-content-between">
              <div className=" col-6">
                <label for="">Type</label>
                <br />
                <select onChange={e=>setSearches(current=>({...current,type:e.target.value}))}>
                  {artistType.map((type) => (
                    <option value={type}>{type }</option>
                  ))}
                </select>
              </div>
              <div className="search-btn col-3  mt-3 ">
                <button type="submit">Search</button>
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
                  <label for="">
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
}

export default Search;