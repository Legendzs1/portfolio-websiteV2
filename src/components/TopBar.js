import React from "react";
import logo from "./logo0.png";

const TopBar =({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeights,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0p 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <img src={logo} alt="THLB" />
    </div>
  );
};

export default TopBar;
