import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyWord] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  const handleFocus = (event) => {
    event.target.style.background = "#e9ecef";
  };

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <section>
          <h1 className="dictionary">What word do you want to look up?</h1>
          <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="form-inline">
              <div className="input-group mb-3">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  className="form-control ms-2 rounded"
                  placeholder="Enter a word"
                  onFocus={handleFocus}
                  defaultValue={props.defaultKeyword}
                ></input>
                <div className="input-group-append mb-1">
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
