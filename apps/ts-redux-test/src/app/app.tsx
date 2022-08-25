// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {Typography} from "@mui/material";
import FrozenDept from "../components/frozen-dept/frozen-dept";
import {FoodData} from "../../../my-reducer-app/src/reducers/rootReducer";

const frozenSeedData: FoodData[] = [
  {food: 'TV dinners', quantity: 10},
  {food: 'Frozen Veggies', quantity: 21},
  {food: 'Frozen Pizzas', quantity: 25},
];

export function App() {
  return (
    <div>
      <Typography>Typescript Redux Test</Typography>
      <FrozenDept />
    </div>
  );
}

export default App;
