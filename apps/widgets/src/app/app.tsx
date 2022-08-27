// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import MyAccordion, {Item} from "../components/accordion/myAccordion";
import React, {useState} from "react";
import MySearch from "../components/my-search/my-search";
import MyDropdown from "../components/my-dropdown/my-dropdown";

const items: Item[] = [
  {title: 'What is React?', content: 'React is a front end javascript framework'},
  {title: 'Why use React?', content: 'React is a favorite javascript library amont engineers'},
  {title: 'How do you use React?', content: 'You use React by creating react components'},
];

export interface Color {
  label: string;
  value: string;
}

const options: Color[] = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
];

const App: React.FC = () => {
  const [selected, setSelected] = useState<Color>(options[0]);
  return (
    <div className={styles['container']}>
      {/*<MyAccordion items={items}/>*/}
      {/*<MySearch />*/}
      <MyDropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
