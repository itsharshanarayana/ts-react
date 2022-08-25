import repositoriesReducer from "./repositoriesReducer";
import {combineReducers} from "redux";


const rootReducers = () => combineReducers({
  repositories: repositoriesReducer
});

export default rootReducers;
