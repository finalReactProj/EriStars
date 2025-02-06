import React, { useEffect,useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
import abeba from "../../assets/abebaHaile.jpg";
import axios from 'axios';
const Home = () => {
  const [artist, setArtist] = useState({
    art: null,
    user:null
 })

  useEffect(() => {
    axios.get("http://localhost:3001/api/getAllArtists")
      .then(res => setArtist(current => ({...current, art: res.data.message})))   
      .catch(error=>console.error(error)
      )
    axios
      .get("http://localhost:3001/api/getAllUsers")
      .then((res) =>
        setArtist((current) => ({ ...current, user: res.data.message }))
      )
      .catch((error) => console.error(error));


    }, [])
    


    return (
      <>
        <div className="text-center  p-3">
          <h4>Why We Use Eri Stars</h4>
        </div>
        <section className="index-para">
          <div className="mx-3 px-lg-5">
            <p>
              How much do you know about Eritrean Artists ? In this Website we
              will invite you on a virtual “cultural trip” to discover
              Eritrean-Artists. The most exciting part is the top Eritrean
              Artists The following list of Eritrean artists are artists of
              various genres, who are notable and are either born in Eritrea, of
              Eritrean descent or who produce works that are primarily about
              Eritrea. Eritrean music has inspired fellow Eritreans and some
              parts of Eritrean neighboring regions. which feature original
              compositions songs in native languages mission for social justice,
              peace, and understanding political, or some addressing social
              justice, freedom, and human rights issues. The Eritrean Movie
              Authors meets the traditional expectations of good drama with
              strong plots, engaging characters, incisive language and inventive
              settings, yet with telltale characteristics of the Eritrean life
              experience.
            </p>
          </div>
        </section>
        <div className="register">
          <div className="row m-2 p-5 justify-content-between">
            <button className="body-btn col-12 mb-3 p-1 col-md-3 m-2">
              <label className="num-viewers">{artist.art}</label>
              <p>
                Registered <br className="d-none d-md-block" />
                Artist
              </p>
            </button>
            <button className="body-btn col-12 mb-3 p-2 col-md-3  m-2">
              <label className="num-viewers">{artist.user} </label>
              <p>
                Registered <br className="d-none d-md-block" />
                Users
              </p>
            </button>
            <button className="body-btn col-12 mb-3 p-2 col-md-3 m-2">
              <label className="num-viewers">1M</label>
              <p>
                Weekly <br className="d-none d-md-block" />
                Searches
              </p>
            </button>
          </div>
          <div className="index-hd text-center m-5">
            <h4>Most Popular Searches</h4>
          </div>
          <div className="row mb-5 justify-content-around px-lg-4 card-container ">
            <div className="card  col-9 col-md-5 col-lg-3 m-3 ">
              <img  src={abeba} alt="" />
              <div className="text-center m-3">
                <label for="">
                  <h5>Isaias-Tsegai</h5>
                </label>
              </div>
              <div className="viewbtn text-center">
                <a href="https://tesfanews.com/isaias-tsegay-proficient-master-of-the-literature-of-the-eye/">
                  View
                </a>
              </div>
            </div>
            <div className="card  col-9 col-md-5 col-lg-3 m-3 ">
              <img src={abeba} alt="" />
              <div className="text-center m-3">
                <label for="">
                  <h5>Abraham Afewerki</h5>
                </label>
              </div>
              <div className="viewbtn text-center">
                <a
                  href="https://en.wikipedia.org/wiki/Abraham_Afewerki"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="card  col-9 col-md-5 col-lg-3 m-3 ">
              <img src={abeba} alt="" />
              <div className="text-center m-3">
                <label for="">
                  <h5>Solomon Tsehaye</h5>
                </label>
              </div>
              <div className="viewbtn text-center">
                <a href="https://en.wikipedia.org/wiki/Eritrea,_Eritrea,_Eritrea">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home