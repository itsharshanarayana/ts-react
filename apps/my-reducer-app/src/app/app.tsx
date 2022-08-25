// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import FrozenDept from "../components/frozen-dept/frozen-dept";
import ProduceDept from "../components/produce-dept/produce-dept";
import MeatDept from "../components/meat-dept/meat-dept";
import {FoodData} from "../reducers/rootReducer";

const frozenSeedData: FoodData[] = [
  {food: 'TV dinners', quantity: 10},
  {food: 'Frozen Veggies', quantity: 21},
  {food: 'Frozen Pizzas', quantity: 25},
];

export function App() {
  return (
    <div>
      <FrozenDept />
      <br/>
      <ProduceDept />
      <br/>
      <MeatDept />
    </div>
  );
}

export default App;
