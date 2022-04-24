import React from "react";
import { login, logout } from "../utils";
import styles from './infoBuddle.css'
import an_2 from '../assets/an-2.png'

const InfoBubble = (props) => {
  return (
    <div className="buddle">
      <img alt='an_2' src={an_2} width="200" height="220"></img>
        <h1>Let's mint an NFT today!</h1>
        <h3>click here first</h3>
        <button
          style={{ width: "15vw" }}
          onClick={window.walletConnection.isSignedIn() ? logout : login}
        >
          {window.walletConnection.isSignedIn() ? window.accountId : "Login"}
        </button>
      </div>
  );
};

InfoBubble.propTypes = {};

export default InfoBubble;