import {FoodData, Payload} from "./rootReducer";
import {MeatAction} from "../actions/updateMeatAC";


const seedData: FoodData[] = [
  {food: 'chicken', quantity: 10},
  {food: 'fish', quantity: 40},
  {food: 'salmon', quantity: 15},
];

export default (state: FoodData[] = seedData, action: MeatAction): FoodData[] => {

  if (action.type === 'UPDATE_MEAT') {
    const newState = [...state];
    switch(action.payload.operation) {
      case '+':
        newState[action.payload.index].quantity++;
        break;
      case '-':
        newState[action.payload.index].quantity--;
        break;
    }
    return newState;
  }

  return state;
};
