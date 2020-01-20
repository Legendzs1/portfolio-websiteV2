import React from "react";
import logo from "./logo0.png";

const Sidebar = ({menuItems, styles}) => {
  const sidebarStyle = {
    height:"100vh",
    width: styles.sidebarWidth,
    position:"fixed",
    backgroundColor:"#333",
    paddingTop: 40,

  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9),
    marginLeft: "23px"
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 10 : 20
  };

  const logoStyle = {
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold",

  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>{styles.sidebarCollapsed ? <img src={logo} /> : "THLB"}</div>
      {menuItems.map((item, i) => (
        <div key={i} style={menuItemStyle}>
          {!styles.sidebarCollapsed || <span style={iconStyle}>{item.text.charAt(0)}</span>}
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
