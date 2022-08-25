import {FoodData} from "../data-types/food-data-type";
import {FoodAction} from "../actions/food-actions";
import {FoodActionTypes} from "../action-types/food-action-types";


const seedData: FoodData[] = [
  {food: 'vegetables', quantity: 10},
  {food: 'tomatoes', quantity: 40},
  {food: 'watermelon', quantity: 15},
];

const produceReducer = (state: FoodData[] = seedData, action: FoodAction): FoodData[] => {
  const newState: FoodData[] = [...state];
  switch(action.type){
    case FoodActionTypes.UPDATE_FROZEN:
      return state;
    case FoodActionTypes.UPDATE_MEAT:
      return state;
    case FoodActionTypes.UPDATE_PRODUCE:
      if (action.payload.operation === '+') {
        newState[action.payload.index].quantity++;
      } else if (action.payload.operation === '-') {
        newState[action.payload.index].quantity--;
      }
      return newState;
    default:
      return state;
  }
};

export default produceReducer;
