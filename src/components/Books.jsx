import React from "react";
import styles from "./movies.module.css";

export default function Books(props) {
  const { data } = props;
  return (
    <div className={styles.bookDashboard}>
      {data.docs.map((book, index) => {
        // console.log(book);
        return (
          <div key={index} className={(styles.bookTitle, styles.information)}>
            <h1>
              {index + 1}: {book.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
