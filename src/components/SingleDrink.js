import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

function SingleDrink() {

    const singleDrinkData = useSelector((state) => state);
    console.log(singleDrinkData);

    return (
        <div className="drink-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ width: '60rem', height: '24rem'}}>
                {
                    singleDrinkData && singleDrinkData.map((drinks, index) => ( 
                        <>             
                        <Card.Img variant="bottom" src={drinks.strDrinkThumb} alt="drink" />
                        <Card.Body>
                            <Card.Title>{drinks.strDrink}</Card.Title>
                            <Card.Text>{drinks.strIngredient1}<br/>{drinks.strIngredient2}<br/>{drinks.strIngredient3}<br/>{drinks.strIngredient4}<br/>{drinks.strIngredient5}<br/>{drinks.strIngredient6}</Card.Text>
                            <Card.Text>{drinks.strGlass}</Card.Text>
                            <Card.Text>{drinks.strInstructions}</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </>
                    ))
                }
            </Card>
             
            {/* <table className = "table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Type of Glass</th>
                        <th>Description</th>
                    </tr>
                </thead>
                {
                    singleDrinkData && singleDrinkData.map((drinks, index) => (
                        <tr>
                            <th>{drinks.strDrink}</th>
                            <th>{drinks.strIngredient1}
                                <br/>
                                {drinks.strIngredient2}
                                <br/>
                                {drinks.strIngredient3}
                                <br/>
                                {drinks.strIngredient4}
                                <br/>
                                {drinks.strIngredient5}
                                <br/>
                                {drinks.strIngredient6}
                            </th>
                            <th>{drinks.strGlass}</th>
                            <th>{drinks.strInstructions}</th>
                        </tr>
                    ))
                }
            </table> */}
        </div>
    )
}

export default SingleDrink;