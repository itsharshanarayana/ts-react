import {combineReducers} from "redux";
import frozenReducer from "./frozenReducer";
import produceReducer from "./produceReducer";
import meatReducer from "./meatReducer";

export interface Payload {
  operation: string;
  index: number
}

export interface FoodData {
  food: string;
  quantity: number
}

export default combineReducers({
  frozen: frozenReducer,
  produce: produceReducer,
  meat: meatReducer
});
