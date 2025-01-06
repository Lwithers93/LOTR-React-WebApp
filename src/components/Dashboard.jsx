// import react hooks useState and useEffect
import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import styles from "./dashboard.module.css";
import Options from "./Options";
import Movies from "./Movies";
import Books from "./Books";
import Characters from "./Characters";
import Loader from "./Loader";

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);

  function clickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    character: <Characters data={data} />,
    book: <Books data={data} />,
    movie: <Movies data={data} />,
  };

  // jsx to return
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 class={styles.mainTitle}>LOTR Info Page</h1>
        <Options selection={selection} setSelection={clickHandler} />
        {loading && <Loader />}
        {data && !loading && dataRender[selection]}
      </div>
    </div>
  );
}
