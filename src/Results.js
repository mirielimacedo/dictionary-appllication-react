import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (!props.results) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.phonetics.map((phonetic, index) => (
        <Phonetic key={index} phonetic={phonetic} />
      ))}
      {props.results.meanings.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </div>
  );
}
