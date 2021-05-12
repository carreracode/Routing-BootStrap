
import React, { useEffect, useState } from "react";
import{Card,CardColumns,Button,Container,Row, Col} from "react-bootstrap"

function Home() {
 const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
      <Container className="row">
  
    {data.map((character) => (
     
          <Card key={character.id} className="m-3 p-1" style={{ width: '20%' }}>
  <Card.Img variant="top" src={character.image}/>
  <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.species}</Card.Text>
          <Button variant="primary" href={character.url} target="_blank">
            More Info
          </Button>
        </Card.Body>
        
</Card>
      
    ))}

  </Container>
  );
}

export default Home;