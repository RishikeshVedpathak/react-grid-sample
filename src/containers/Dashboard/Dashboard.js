import React, {Component} from "react";
import styles from "./Dashboard.css";

class Dashboard extends Component {
  render(){
    return(
      <div className={styles.Warapper}>{JSON.stringify(styles)}Dashboard Container</div>
    )
  }
};

export default Dashboard;
