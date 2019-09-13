import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
 CardSubtitle
} from 'reactstrap';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: orange
`;

const DisplayPic = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://source.unsplash.com/random/?starwars" alt="{props.name}" />
        <CardBody>
          <Title>{props.name}</Title>
          <CardSubtitle>{props.model}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default DisplayPic;


