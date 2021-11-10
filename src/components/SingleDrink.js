import React from 'react'; 
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

function SingleDrink () {

    const singleDrinkData = useSelector((state) => state);
    console.log(singleDrinkData);

    return (
        <div className = "drink">
            <table className = "table">
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
            </table>
        </div>
    )
}

export default SingleDrink;