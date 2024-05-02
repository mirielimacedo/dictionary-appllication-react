import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyWord] = useState("");

  const handleFocus = (event) => {
    event.target.style.background = "#e9ecef"; // Por exemplo, muda a cor de fundo
  };

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}  defintion`);
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
