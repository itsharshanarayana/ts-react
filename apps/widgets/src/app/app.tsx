// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import MyAccordion, {Item} from "../components/accordion/myAccordion";
import React from "react";
import MySearch from "../components/my-search/my-search";

const items: Item[] = [
  {title: 'What is React?', content: 'React is a front end javascript framework'},
  {title: 'Why use React?', content: 'React is a favorite javascript library amont engineers'},
  {title: 'How do you use React?', content: 'You use React by creating react components'},
];

const App: React.FC = () => {
  return (
    <div className={styles['container']}>
      {/*<MyAccordion items={items}/>*/}
      <MySearch />
    </div>
  );
}

export default App;
