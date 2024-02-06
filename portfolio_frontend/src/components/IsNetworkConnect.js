import React, { useState, useEffect } from "react";
import "../css/IsNetworkConnect.css";

const IsNetworkConnect = ({isOnline}) => {

  return (
    <div className={`network`}>
      {isOnline ? (
        <p>Connected to the internet.</p>
      ) : (
        <p>No internet connection. Please check your network.</p>
      )}
    </div>
  );
};

export default IsNetworkConnect;
