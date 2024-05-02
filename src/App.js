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
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            Mirieli Maria{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/mirielimacedo/dictionary-appllication-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub {""}
          </a>
          and{""}
          <a
            href="https://app.netlify.com/sites/my-dictionary-app-shecodes/deploys/663321ef5ac4787049621491"
            target="_blank"
            rel="noreferrer"
          >
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
