// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import MyAccordion from "../components/accordion/myAccordion";
import React, {useState} from "react";
import MySearch from "../components/my-search/my-search";
import MyDropdown from "../components/my-dropdown/my-dropdown";
import MuiDropdown from "../components/mui-dropdown/mui-dropdown";
import MuiAccordion from "../components/mui-accordion/mui-accordion";
import {Item} from "../types/types";
import MuiSearch from "../components/mui-search/mui-search";

const items: Item[] = [
  {id: 1, title: 'What is React?', content: 'React is a front end javascript framework'},
  {id: 2, title: 'Why use React?', content: 'React is a favorite javascript library among engineers'},
  {id: 3, title: 'How do you use React?', content: 'You use React by creating react components'},
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
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className={styles['container']}>
      {/*<MyAccordion items={items}/>*/}
      {/*<MySearch />*/}
      {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {
        showDropdown ?
          <MyDropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          /> : null
      }*/}
      {/*<MuiDropdown items={options}
                   selected={selected}
                   onSelectedChange={setSelected}/>*/}
      {/*<MuiAccordion items={items}/>*/}

      <MuiSearch />
    </div>
  );
}

export default App;
