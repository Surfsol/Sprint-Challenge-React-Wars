import React, {useState, useEffect}from "react";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import CharacterD  from './characterD'


function Character () {
    const [person, setPerson] = useState([])
   

    useEffect(() => {
        axios
            .get(`
            https://swapi.co/api/people/ `) //add KEY
            .then(response => {
                console.log(`response`, response)
                console.log(`response`, response.data.results)
                let person = response.data.results;
                setPerson(person);

            })
            .catch(error => {
            console.log("The data was not returned", error);
            });
        }, []);

        return(
            <Container>
                <Row>
     
                {person.map((e, index) => (
                    <CharacterD 
                    key={index}
                    name = {e.name}
                    birth_year={e.birth_year}
                    gender={e.gender}
                    />
                ))  
                }
            </Row>
           </Container>
        )
}


export default Character;