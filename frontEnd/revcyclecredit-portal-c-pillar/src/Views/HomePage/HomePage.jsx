import React from "react";

import styles from "./HomePage.css";
import Card from "../../Components/Card/Card";
import { useHistory } from "react-router-dom";

const HomePage = props => {
  const history = useHistory();
  const pages = [
    {
      Page: "C",
      Text: "Collaborate & Communicate",
      Links: ["Spotlight", "Tech Vlog", "Tech Blog", "Expert Corner","E"]
    },
    {
      Page: "R",
      Text: "Reward & Recognize",
      Links: ["Peer Appriciation", "Solution NOTT", "Quarterly Team Award", "Day in Exec Office", "E", "F"]
    },
    {
      Page: "E",
      Text: "Educate & Empower",
      Links: ["Certification", "Training", "Idea Board", "Technology Trends", "E", "F"]
    },
    {
      Page: "D",
      Text: "Deliver & Delight",
      Links: ["Flawless Delivery", "Fun Zone", "Team Sport", "Worklife Balance", "E", "F"]
    },
    {
      Page: "I",
      Text: "Include & Inovate",
      Links: ["One Cerner", "Engineering Culture", "Continues Advancement", "Innovation Corner", "E", "F"]
    },
    { Page: "T", 
      Text: "Tools & Teams", 
      Links: ["Developer to Devlop", "Team Competitions", "Work Env & Infrastructure", "Tech & Architecture Assistor", "E", "F"] 
    }
  ];
  const goTo = ele => {
    switch (ele) {
      case "C":
        history.push("/CollabAndCommunicate");
        break;
      case "R":
        history.push("/RewardAndRecognize");
        break;
      case "E":
        history.push("/EducateAndEmpower");
        break;
      case "D":
        history.push("/DeliverandDelight");
        break;
      case "I":
        history.push("/IncludeAndInovate");
        break;
      case "T":
        history.push("/ToolsAndTeams");
        break;
      default:
        history.push("/");
    }
  };

  // pages.map(Element => {
  //   console.log(Element.Page, Element.Links);
  // });
  
  return (
    <div>
      {pages.map(Element => (
        <div
          key={Element.Page}
          className={styles.CardBody}
          onClick={() => goTo(Element.Page)}
        >
          <Card page={Element.Page} text={Element.Text} links={Element.Links} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
