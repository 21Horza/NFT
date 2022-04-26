import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import { login, logout } from "./utils";

// React Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// React Bootstraps imports
import { Nav, Navbar, Container, Row, Card, Alert } from "react-bootstrap";

// Custom Components
import MintingTool from "./Components/MintingTool";
import InfoBubble from "./Components/InfoBubble";

// assets
import Logo from "./assets/logo-white.svg";

import getConfig from "./config";
const { networkId } = getConfig("development");

export default function App() {
  const [userHasNFT, setuserHasNFT] = useState(false);

  useEffect(() => {
    const receivedNFT = async () => {
      console.log(
        await window.contract.check_token({
          id: `${window.accountId}-wellcome-tok`,
        })
      );
      if (window.accountId !== "") {
        console.log(
          await window.contract.check_token({
            id: `${window.accountId}-wellcome-tok`,
          })
        );

        setuserHasNFT(
          await window.contract.check_token({
            id: `${window.accountId}-wellcome-tok`,
          })
        );
      }
    };
    receivedNFT();
  }, []);

  return (
    <React.Fragment>
      {" "}
      <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={Logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
          </Navbar.Brand>
            <h5 style={{marginTop: 7, color: '#fff'}}>NEAR NFT</h5>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link
                onClick={window.walletConnection.isSignedIn() ? logout : login}
              >
                {window.walletConnection.isSignedIn()
                  ? window.accountId
                  : "Login"}
              </Nav.Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: "3vh" }}>
        {" "}
        {!window.walletConnection.isSignedIn() 
        ? 
        <InfoBubble />
        :
          <MintingTool userNFTStatus={userHasNFT} />
        }
      </Container>
    </React.Fragment>
  );
}