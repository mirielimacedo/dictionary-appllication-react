import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
            className="App-logo img-fluid"
            alt="logo"
          ></img>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          {" "}
          Coded by <a href="https://www.linkedin.com/feed/">
            Mirieli Maria
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
