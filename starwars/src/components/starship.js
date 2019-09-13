
import React, {useState, useEffect}from "react";
import axios from 'axios';
import StarshipD from './starshipPic'
//import axios, and ran add axios

function Starship() {
  const [ship, setShip] = useState({}); //expecting to get an array
  const [num] = useState(9);
    useEffect(() => {
    axios
        .get(`
        https://swapi.co/api/starships/9/`) //add KEY
        .then(response => {
            console.log(`response`, response)
            let ship = response.data;
            console.log(`ship, object`, response.data);
            console.log(`ship, object`, [ship]);
            setShip(ship);
        })
        .catch(error => {
        console.log("The data was not returned", error);
        });
    }, []);

        return (
    
            
            <div className="App">
                <button onClick={() => num + 1}>Next Ship</button>
                <button onClick={() => num - 1}>Go Back</button>
           {[ship].map((e, index) => (
               <StarshipD
               key={index}
               name={e.name}
               model={e.model}
               />
           ))  
           }
           </div>);
}
                
        


export default Starship;

