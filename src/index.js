
import drinkReducer from "./reducers/DrinkReducer";
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {createStore} from "redux";

const store = createStore( drinkReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render (
  <Provider store = {store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

