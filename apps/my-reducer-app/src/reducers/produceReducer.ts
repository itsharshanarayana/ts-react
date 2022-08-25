import {FoodData, Payload} from "./rootReducer";

export interface ProduceAction {
  type: 'UPDATE_PRODUCE',
  payload: Payload
}

const seedData: FoodData[] = [
  {food: 'vegetables', quantity: 10},
  {food: 'tomatoes', quantity: 40},
  {food: 'watermelon', quantity: 15},
];

export default (state: FoodData[] = seedData, action: ProduceAction) => {
  if (action.type === 'UPDATE_PRODUCE') {
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
