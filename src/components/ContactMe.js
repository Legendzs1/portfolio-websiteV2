import React from "react";
import Card from "./Card";

const ContactMe = () => {

  const viewPort = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  }

  return (
    <h3 style={viewPort}>
      Contact me at c.wagner7443@gmail.com with any inquiries.
    </h3>
  )

}

export default ContactMe;
