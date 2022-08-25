import {FoodData} from "../data-types/food-data-type";
import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../action-types/food-action-types";


const seedData: FoodData[] = [
  {food: 'chicken', quantity: 10},
  {food: 'fish', quantity: 40},
  {food: 'salmon', quantity: 15},
];

const meatReducer = (state: FoodData[] = seedData, action: FoodAction): FoodData[] => {
  const newState: FoodData[] = [...state];
  switch(action.type){
    case FoodActionTypes.UPDATE_FROZEN:
      return state;
    case FoodActionTypes.UPDATE_MEAT:
      if (action.payload.operation === '+') {
        newState[action.payload.index].quantity++;
      } else if (action.payload.operation === '-') {
        newState[action.payload.index].quantity--;
      }
      return newState;
    case FoodActionTypes.UPDATE_PRODUCE:
      return state;
    default:
      return state;
  }
};

export default meatReducer;
