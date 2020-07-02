import React from "react";

import styles from "./CCard.css";
import { useRouteMatch} from "react-router-dom";

const CCard = props => {
  const match=useRouteMatch();
  console.log(match);

  if (props.id !== "B") {
    return (
      <div className={styles.Ccard}>
        <div className={styles.cardText}>
          <h2>{props.page}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={styles.Ccard2}>
        <div className={styles.cardText}>
          <h2>{props.page}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    );
  }
};

export default CCard;
