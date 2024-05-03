import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");

  const handleFocus = (event) => {
    event.target.style.background = "#e9ecef";
  };

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={word}&key=${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div>
      <h1 className="dictionary">Dictionary</h1>

      <div className="d-flex justify-content-center">
        <form onSubmit={search} className="form-inline">
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
