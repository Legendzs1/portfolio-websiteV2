import React from "react";
import Card from "./Card";
import styled from 'styled-components';
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";


const Content =({ props, styles, windowWidth }) => {

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topbarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
  };
  const cardsStyle = {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",

  };

  const cards = [
    {
      title: `FirstProject`,
      tech: `HTML, CSS, JavaScript`,
      link: `https://github.com/Legendzs1?tab=repositories`
    },
    {
      title: `secondproject`,
      tech: `React, HTML,CSS,JavaScript`,
      link:`https://reactjs.org/`
    },
    {
      title: `thirdproject`,
      tech: `React, HTML,CSS,JavaScript, more stuff`,
      link:`https://google.com/`
    },
    {
      title: `fourthproject`,
      tech: `React, HTML,CSS,JavaScript, dumb stuff`,
      link:`https://reddit.com/r/leagueoflegends/`
    }
  ];

  const viewPort = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  }


  return (
    <div style={contentStyle} className={"centered"}>
      <section className={"cards"} style={cardsStyle}>
      <AboutMe />
    {cards.map((card, i) => {
      return(
        <Card
          windowWidth={windowWidth}
          className={"card"}
          title={card.title}
          tech={card.tech}
          link={card.link}
        />
      );
    })}
      </section>
      <ContactMe />
    </div>
  );
};

export default Content;
