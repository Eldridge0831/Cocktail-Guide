import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import { setDrinkSelection } from "../reducers/creators/actionCreators";
import { useHistory } from "react-router-dom";
import Page404 from './Page404';


function DrinkList (props) {

    const [drinkListData, setDrinkListData] = useState ([]);
    const [inputValue, setInputValue] = useState ("");
    const [httpStatusCode, setHttpStatusCode] = useState ();
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchDrinkList = (event) => {
        event.preventDefault()
        return axios.get (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`)
        .then (drinks => drinks.data)
        .then (data => {
            console.log(data);
            setInputValue("")
            if (data['drinks'] === null) {
                setDrinkListData([])
                history.push('/404')
            } else 
                setDrinkListData(data['drinks'])
        });
    } 

    useEffect (() => {
        getRandomDrink()
    },[])

    const getRandomDrink = () => {
        return axios.get (`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then (drinks => drinks.data)
        .then (data => {
            console.log("api called")
            return setDrinkListData(data['drinks'])
        });
    };



    const handleRequest = (event) => {
        console.log("request made")
        setInputValue(event.target.value)

    }

    const handleDrinkSelection = (drink) => {
        console.log(drink);
        dispatch(setDrinkSelection(drink));
        history.push('/drink')   
    }

    return (
        <div>
            <h1>Get a Drink List by First Letter</h1>
            <form onSubmit = {fetchDrinkList}>
                <input value={inputValue} onChange={handleRequest} type="text" />
                <button type="submit">Submit</button>
            </form>
        
            <div className = "drinkList-container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        drinkListData.map((drink, index) => (
                            <tr>
                                <Button onClick={() => handleDrinkSelection(drink)}>See Your Drink</Button>
                                <td>{drink.strDrink}</td>
                                <td><img src = {drink.strDrinkThumb} alt = "Cocktail" width = "500rem"/></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DrinkList;