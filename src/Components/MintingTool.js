import React from "react";
import { Alert } from "react-bootstrap";
const BN = require("bn.js");
import an from '../assets/an.png';

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-wellcome-tok`,
        metadata: {
          title: "Wellcome to NEAR NFT",
          description: "WellCOME",
          media:
            "https://bafybeiaoia6qlbpbs7a56vrntpohrmvcpvzrlyz3izuhzpx76kqbsoq5fu.ipfs.nftstorage.link/",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <div>
        <div className="step__2" style={{ marginBottom: "2vh" }}>
          <h1>Almost ready!</h1>
          <h3>click to mint</h3>
          <button
          disabled={props.userNFTStatus || window.accountId === ""}
          onClick={mintNFT}
          style={{ width: "20vw" }}
          >
          Mint NFT
          </button>
          <img className={{marginLeft: "50px"}} height="400" width="260" alt="an" src={an}></img>
        </div>
    {props.userNFTStatus ? (
            <Alert variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                Oops.. You have the NFT already. You can see it{" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  here!
                </a>
                :)
              </p>
            </Alert>
          ) : null}
    </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;