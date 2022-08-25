// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import MyAccordion from "../components/my-accordion/my-accordion";
import {Item} from "../components/my-accordion/my-accordion";

const items: Item[] = [
  {title: 'What is React?', content: 'React is a front end javascript framework'},
  {title: 'Why use React?', content: 'React is a favorite javascript library amont engineers'},
  {title: 'How do you use React?', content: 'You use React by creating react components'},
];

export function App() {
  return (
    <div>
      <MyAccordion items={items}/>
    </div>
  );
}

export default App;
