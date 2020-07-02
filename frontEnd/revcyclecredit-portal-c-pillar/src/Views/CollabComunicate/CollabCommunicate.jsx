import React from "react";

import styles from "./CollabCommunicate.css";
import CCard from "./Card/CCard";
import { useHistory } from "react-router-dom";


const CollabCommunicate = props => {
  const history = useHistory();
  const pages = [
    {
      id: "B",
      Page: "Video Blog",
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    },
    {
      id: "A",
      Page: "Tech Blog",
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format"
    },
    {
      id: "B",
      Page: "Expert Corner",
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    },
    {
      id: "A",
      Page: "Manager Connect",
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    },
    { 
      id: "B",
      Page: "Townhall Open House", 
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    },
    { 
      id: "A",
      Page: "Floor Events", 
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    },
    { 
      id: "B",
      Page: "Tech Forum", 
      Text: "Spotlight is the forum to highlight success stories from revenue cycle team in video interview format "
    }
  ];
  const goTo = ele => {
    switch (ele) {
      case "Video Blog":
        history.push("/CollabCommunicate/VideoBlog");
        break;
      case "Tech Blog":
        history.push("/CollabCommunicate/TechBlog");
        break;
      case "Expert Corner":
        history.push("/CollabCommunicate/ExpertCorner");
        break;
      case "Manager Connect":
        history.push("/CollabCommunicate/ManagerConnect");
        break;
      case "Townhall Open House":
        history.push("/CollabCommunicate/TownhallOpenHouse");
        break;
      case "Floor Events":
        history.push("/CollabCommunicate/FloorEvents");
        break;
      case "Tech Forum":
        history.push("/CollabCommunicate/TechForum");
        break;
      default:
        history.push("/");
    }
  };

  // pages.map(Element => {
  //   console.log(Element.Page, Element.Links);
  // });
  return (
    <div className={styles.MainBody}>
      {pages.map(Element => (
        <div
          key={Element.Page}
          className={styles.CardBody}
          onClick={() => goTo(Element.Page)}
        >
          <CCard id={Element.id} page={Element.Page} text={Element.Text} />
        </div>
      ))}
    </div>
  );
};

export default CollabCommunicate;
