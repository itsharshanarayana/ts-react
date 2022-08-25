import {Payload, FoodData} from "./rootReducer";

export interface FrozenAction {
  type: string;
  payload: Payload;
}


const seedData: FoodData[] = [
  {food: 'TV dinners', quantity: 10},
  {food: 'Frozen Veggies', quantity: 21},
  {food: 'Frozen Pizzas', quantity: 25},
];

export default (state: FoodData[] = seedData, action: FrozenAction): FoodData[] => {

  if (action.type === 'UPDATE_FROZEN') {
    const newState: FoodData[] = [...state];
    switch(action.payload.operation) {
      case '+':
        newState[action.payload.index].quantity++;
        break;
      case '-':
        newState[action.payload.index].quantity--;
        break;
      default:
        return state;
    }
    return newState;
  }

  return state;

};
