import React from "react";
import Card from "./Card";
import styled from 'styled-components';

const Content =({ props, styles }) => {

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topbarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
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

  return (
    <div style={contentStyle}>
    cards.map((card, i) => {
      return(
        <Card
          title={card.title}
          tech={card.tech}
          link={card.link}
        />
      );
    });
    </div>
  );
};

export default Content;
