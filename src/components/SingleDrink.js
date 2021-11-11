import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row } from 'react-bootstrap';

function SingleDrink() {

    const singleDrinkData = useSelector((state) => state);
    // console.log(singleDrinkData);

    return (
        <div className="drink-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '60rem'}}>
                {
                    singleDrinkData && singleDrinkData.map((drinks, index) => ( 
                        <>
                        <Row className='g-0'>
                        <Col md='4'>            
                        <Card.Img variant="bottom" src={drinks.strDrinkThumb} alt="drink" />
                        </Col>
                        <Col md='8'>
                        <Card.Body>
                            <Card.Title>{drinks.strDrink}</Card.Title>
                            <Card.Text>{drinks.strIngredient1}<br/>{drinks.strIngredient2}<br/>{drinks.strIngredient3}<br/>{drinks.strIngredient4}<br/>{drinks.strIngredient5}<br/>{drinks.strIngredient6}</Card.Text>
                            <Card.Text>{drinks.strGlass}</Card.Text>
                            <Card.Text>{drinks.strInstructions}</Card.Text>
                        </Card.Body>
                        </Col>
                        </Row>
                        </>
                    ))
                }
            </Card>
        </div>
    )
}

export default SingleDrink;