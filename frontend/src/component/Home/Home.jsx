import React, {  useEffect,useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
import axios from 'axios';
const Home = () => {
  const [artist, setArtist] = useState({
    art: null,
    user: null,
    count:0,
  });
  const [mostlySearches, setMostlySearches] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getAllArtists")
      .then((res) =>
        setArtist((current) => ({ ...current, art: res.data.message }))
      )
      .catch((error) => console.error(error));
    axios
      .get("http://localhost:3001/api/getAllUsers")
      .then((res) =>
        setArtist((current) => ({ ...current, user: res.data.message }))
      )
      .catch((error) => console.error(error));
 axios
   .get("http://localhost:3001/api/getAllSearches")
   .then((res) =>
     setArtist((current) => ({ ...current, count: res.data.message }))
   )
   .catch((error) => console.error(error));
    axios
      .get("http://localhost:3001/api/getPopularArtists")
      .then((res) => {
        setMostlySearches(res.data.message);
      })

      .catch((error) => console.error(error));
  }, []);



  return (
    <main className="main">
      <div className="text-center  p-3">
        <h4>Why We Use Eri Stars</h4>
      </div>
      <section className="index-para">
        <div className="mx-3 px-lg-5">
          <p>
            How much do you know about Eritrean Artists ? In this Website we
            will invite you on a virtual “cultural trip” to discover
            Eritrean-Artists. The most exciting part is the top Eritrean Artists
            The following list of Eritrean artists are artists of various
            genres, who are notable and are either born in Eritrea, of Eritrean
            descent or who produce works that are primarily about Eritrea.
            Eritrean music has inspired fellow Eritreans and some parts of
            Eritrean neighboring regions. which feature original compositions
            songs in native languages mission for social justice, peace, and
            understanding political, or some addressing social justice, freedom,
            and human rights issues. The Eritrean Movie Authors meets the
            traditional expectations of good drama with strong plots, engaging
            characters, incisive language and inventive settings, yet with
            telltale characteristics of the Eritrean life experience.
          </p>
        </div>
      </section>
      <div className="register">
        <div className="row m-lg-4  p-5 justify-content-between gap-2 btns">
          <button className="body-btn col-10 mb-3 p-1 col-md-2">
            <label className="num-viewers">{artist.art}</label>
            <p>
              Registered <br className="d-none d-sm-block" />
              Artist
            </p>
          </button>
          <button className="body-btn col-10 mb-3 p-2 col-md-2 ">
            <label className="num-viewers">{artist.user} </label>
            <p>
              Registered <br className="d-none d-sm-block" />
              Users
            </p>
          </button>
          <button className="body-btn col-10 mb-3 p-2 col-md-2">
            <label className="num-viewers">{ artist.count}</label>
            <p>
              Weekly <br className="d-none d-sm-block" />
              Searches
            </p>
          </button>
        </div>
        <div className="index-hd text-center m-5">
          <h4>Most Popular Searches</h4>
        </div>
        <div className="row mb-5 justify-content-around px-lg-4 card-container ">
          {mostlySearches.map((topArtist, index) => (
            <div className="card  col-9 col-md-3 col-lg-3 m-3 " key={index}>
              <img src={topArtist.imageSrc} alt="" />
              <div className="text-center m-3">
                <label>
                  <h5>{topArtist.fullName}</h5>
                </label>
              </div>
              <div className="viewbtn row text-center">
                <a className="col-10 mx-auto py-1" href={topArtist.history}>
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home