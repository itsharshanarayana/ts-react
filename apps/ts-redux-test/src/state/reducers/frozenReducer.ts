import {FoodActionTypes} from "../action-types/food-action-types";
import {FoodAction} from "../actions/food-actions";
import {FoodData} from "../data-types/food-data-type";

const INITIAL_DATA: FoodData[] = [
  {food: 'TV dinners', quantity: 10},
  {food: 'Frozen Veggies', quantity: 21},
  {food: 'Frozen Pizzas', quantity: 25},
];

const frozenReducer = (state: FoodData[] = INITIAL_DATA, action: FoodAction): FoodData[] => {
  const newState: FoodData[] = [...state];
  switch(action.type){
    case FoodActionTypes.UPDATE_FROZEN:
      if (action.payload.operation === '+') {
        newState[action.payload.index].quantity++;
      } else if (action.payload.operation === '-') {
        newState[action.payload.index].quantity--;
      }
      return newState;
    case FoodActionTypes.UPDATE_MEAT:
      return state;
    case FoodActionTypes.UPDATE_PRODUCE:
      return state;
    default:
      return state;
  }

};

export default frozenReducer;
