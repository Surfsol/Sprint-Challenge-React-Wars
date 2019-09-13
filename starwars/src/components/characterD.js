import React from 'react';
import {
  Card, CardImg, CardBody,
   Col
} from 'reactstrap';
import styled from "styled-components"

const CardTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;

const CardSubtitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const CharacterD = (props) => {
  return (
    <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src="https://source.unsplash.com/random/?starwars" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardTitle>Gender: {props.gender}</CardTitle>
          <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterD;