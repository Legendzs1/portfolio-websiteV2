import React from 'react';
import styled, {css} from 'styled-components';
import ReactDOM from 'react-dom';



const Card = (props, styles, windowWidth) => {

  const cardStyles = {
    backgroundColor:'#fff',
    width: '25%',
    height: '25%',
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    flex: "calc(50% -  1em)"
  }

const mediaQuery = {
  desktop: 1200,
  tablet: 768,
  phone: 576,
};


  const Button = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
    outline: 0;
    font-weight: 300;
    :hover {
      opacity: 0.8;
    };
  `

  const Title = styled.h2`
  color:black;
  font-weight:300;
  `
  const Description = styled.p`
    color: black;
    font-weight: 300;
  `

//TODO now that windowWidth is passed through check to see if that value actually works

  return (
    <div style={styles, cardStyles}>
      <Title>{props.title}</Title>
      <Description>{props.tech}</Description>
      <Button
        href={props.link}
        target="_blank"
        >Check out on Github
      </Button>
    </div>
  )
};


export default Card
