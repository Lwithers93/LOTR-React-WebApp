import React, { useState } from "react";
import styles from "./movies.module.css";

export default function Characters(props) {
  // SQUARE BRACKETS FOR USESTATE
  const [char, setChar] = useState("");

  const { data } = props;

  const mappedList = data.docs.filter((element) => {
    if (char == "") {
      return true;
    }
    // toLowerCase() issue fixed
    if (element["name"].toLowerCase().includes(char.toLowerCase())) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.movieDashboard}>
      <input
        className={styles.characterSelect}
        value={char}
        placeholder={"Character Name"}
        onChange={(e) => {
          setChar(e.target.value);
        }}
      ></input>
      {mappedList.map((char, index) => {
        const keys = Object.keys(char).filter((element) => {
          if (element == "name" || element == "_id" || element == "wikiUrl") {
            return false;
          }
          if (!char[element]) {
            return false;
          }
          return true;
        });
        return (
          <div key={index} className={styles.information}>
            <h1>{char.name}</h1>
            {keys.map((title) => {
              return (
                <div key={title} className={styles.keyVal}>
                  <p>
                    {title}: {char[title]}
                  </p>
                </div>
              );
            })}
            <p>
              <a href={char.wikiUrl} target={"_blank"}>
                Wiki link
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
}
