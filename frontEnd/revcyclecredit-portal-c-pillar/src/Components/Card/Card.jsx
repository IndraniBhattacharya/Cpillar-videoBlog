import React from "react";

import styles from "./Card.css";

const card = props => {
  if (props.links && props.links.length > 4) {
    props.links.splice(4);
    props.links.push("and More..");
  }
  if (props.page !== "E") {
    return (
      <div className={styles.card}>
        <div className={styles.cardText}>
          <h2>{props.page}</h2>
          <p>{props.Links}</p>
        </div>
        <div className={styles.cardTitle}>{props.text}</div>
        <div className={styles.cardStats}>
          {props.links.map(Link => (
            <div key={Link}>{Link}</div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.card2}>
        <div className={styles.cardText2}>
          <h2>{props.page}</h2>
          <p>{props.Links}</p>
        </div>
        <div className={styles.cardTitle}>{props.text}</div>
        <div className={styles.cardStats}>
          {props.links.map(Link => (
            <div key={Link}>{Link}</div>
          ))}
        </div>
      </div>
    );
  }
};

export default card;
