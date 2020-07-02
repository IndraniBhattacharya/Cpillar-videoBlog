import React, { Component } from "react";

import styles from "./App.css";
import HomePage from "./Views/HomePage/HomePage";
import CollabCommunicate from "./Views/CollabComunicate/CollabCommunicate";
import DeliverDelight from "./Views/DeliverDelight/DeliverDelight.jsx";
import EducateEmpower from "./Views/EducateEmpower/EducateEmpower";
import IncludeInovate from "./Views/IncludeInnovate/IncludeInnovate";
import RewardRecognize from "./Views/RewardRecognize/RewardRecognize";
import ToolsTeams from "./Views/ToolsTeams/ToolsTeams";
import VideoBlog from "./Views/CollabComunicate/VideoBlog/VideoBlog";
import { Route } from "react-router-dom";
import { BrowserRouter , Switch } from "react-router-dom";
import headerImg from "./Assets/Images/TopBar.png";


//Exception [ NO MATCH FOUND ]
const Page404 = () => <h1>404 Not Found</h1>



class App extends Component {
  render() {
    return (
      <div className={styles.Body}>
        <div className={styles.App}>
          <header className={styles.AppHeader}><img alt="header" src={headerImg}></img></header>
        </div>
        <BrowserRouter>
          <div className={styles.MainBody}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/CollabAndCommunicate" component={CollabCommunicate} />
                 <Route path="/CollabCommunicate/VideoBlog" component={VideoBlog} />
            <Route path="/RewardAndRecognize" component={RewardRecognize} />
            <Route path="/EducateAndEmpower" component={EducateEmpower} />
            <Route path="/DeliverandDelight" component={DeliverDelight} />
            <Route path="/IncludeAndInovate" component={IncludeInovate} />
            <Route path="/ToolsAndTeams" component={ToolsTeams} />
            <Route component={Page404} ></Route>
            </Switch>
          </div>
        </BrowserRouter>
        <div className={styles.footer}>Copyright@Revenue Cycle India Dev</div>
      </div>
      
    );
  }
}

export default App;
