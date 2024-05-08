import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleFocus = (event) => {
    event.target.style.background = "#e9ecef";
  };

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <h1 className="dictionary">Dictionary</h1>
        <section>
          <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="form-inline">
              <div className="input-group mb-3">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  className="form-control ms-2 rounded"
                  placeholder="Enter a word"
                  onFocus={handleFocus}
                ></input>
                <div className="input-group-append">
                  <button className="btn btn-primary ms-2" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          <small>Suggested words: sunset, wine, yoga, planet</small>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
