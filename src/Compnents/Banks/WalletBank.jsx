import React, { useState } from "react";

import { Link } from "react-router-dom";
import WalletBank1 from "./WalletBank1";
import WalletBank2 from "./WalletBank2";

const WalletBank = ({ setComIndex, compIndex }) => {
    console.log(847476666666666)
  const arr = [
    {
      com: <WalletBank1 setComIndex={setComIndex} compIndex={compIndex} />,
    },
    {
      com: <WalletBank2 setComIndex={setComIndex} />,
    },
    {
      com: <div>444</div>,
    },
  ];
  return <div>{arr[compIndex].com}</div>;
};

export default WalletBank;
