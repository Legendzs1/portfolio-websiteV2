import React from 'react';
import styled, {css} from 'styled-components';
import ReactDOM from 'react-dom';
import './card.css';



const Card = (props, styles) => {

  const cardStyles = {
    backgroundColor:'#fff',
    width: '25%',
    height: '25%',
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
    padding: '10px',
    margin: '1rem .25em',
    textAlign: 'center',
    flex: "1 0 calc(49% - 1em)", // controls the size of the box

  }

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
  return (
    <div style={styles, cardStyles} >
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
