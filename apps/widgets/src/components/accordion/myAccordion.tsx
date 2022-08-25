import styles from './accordion.module.css';

import React, {useState} from "react";

export interface Item {
  title: string;
  content: string;
}

/* eslint-disable-next-line */
export interface AccordionProps {
  items: Item[];
}


const MyAccordion: React.FC<AccordionProps> = ({items}) => {

  // Use useState hook from react library to initialize the state.
  // import useState hook from react.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    // Update the activeIndex state with the index.
    setActiveIndex(index);
  };

  const itemsToRender = items.map(
    (item, index) => {
      const active = index === activeIndex ? 'active' : '';
      return (
        <React.Fragment key={item.title}>
          <div
            className={`title ${active}`}
            // () => onTitleClick(index) - is a reference to a function.
            onClick={() => onTitleClick(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    }
  );


  console.log('Items length:', items.length);

  return (
    <div className={`${styles['container']} ui styled accordion`}>
      {itemsToRender}
    </div>
  );
}

export default MyAccordion;
