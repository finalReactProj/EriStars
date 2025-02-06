import abeba from "../../assets/abebaHaile.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
const Search = () => {
  return (
    <>
      <div className="search-title text-center m-5">
        <h3>Search</h3>
      </div>
      <div className="container-fluid search-bar">
        <div className="row pt-3 pb-3 justify-content-center">
          <div className="name col-12 col-lg-4">
            <label for="">Artist Name</label>
            <br />
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className=" status col-12 col-lg-3">
            <label for="">Status</label>
            <br />
            <select name="" id="">
              <option value="">All</option>
              <option value="" href="">
                Current
              </option>
              <option value="">Retired</option>
            </select>
          </div>
          <div className="type col-12 col-lg-5">
            <div className="row justify-content-between">
              <div className=" col-8">
                <label for="">Type</label>
                <br />
                <select name="" id="">
                  <option value="">All</option>
                  <option value="">Singer</option>
                  <option value="">Musician</option>
                  <option value="">Actor/Actress</option>
                  <option value="">Author</option>
                  <option value="">Poet</option>
                  <option value="">Painter</option>
                </select>
              </div>
              <div className="search-btn col-3  mt-3 mr-4">
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
        <div className="row mb-5 justify-content-center card-container ">
          <div className="card  col-9 col-md-5 col-lg-3 my-5 me-5 ">
            <div>
              <img src={abeba} alt="" />
            </div>
            <div className="text-center m-3">
              <h4>Abraham Afewerki</h4>
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
          <div className="card col-9 mb-4 col-md-5 col-lg-3 my-5 mx-5">
            <div>
              <img src={abeba} alt="" />
            </div>
            <div className="text-center m-3">
              <h4>Ato Beyene Hayle</h4>
            </div>
            <div className="viewbtn text-center ">
              <a href="http://www.beyanhaile.com/about.html" target="_blank">
                View
              </a>
            </div>
          </div>
          <div className="card col-9 mb-4 col-md-5 col-lg-3 my-5 mx-5">
            <div>
              <img src={abeba} alt="" />
            </div>
            <div className="text-center m-3">
              <h4>Ato Beyene Hayle</h4>
            </div>
            <div className="viewbtn text-center ">
              <a href="http://www.beyanhaile.com/about.html" target="_blank">
                View
              </a>
            </div>
          </div>
          <div className="card col-9 mb-4 col-md-5 col-lg-3 my-5 mx-5">
            <div>
              <img src={abeba} alt="" />
            </div>
            <div className="text-center m-3">
              <h4>Ato Beyene Hayle</h4>
            </div>
            <div className="viewbtn text-center ">
              <a href="http://www.beyanhaile.com/about.html" target="_blank">
                View
              </a>
            </div>
          </div>
           
        </div>
          
      </div>
    </>
  );
      
}

export default Search;