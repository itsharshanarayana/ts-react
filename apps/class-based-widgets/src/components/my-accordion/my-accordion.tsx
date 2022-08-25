import styles from './my-accordion.module.css';
import React from "react";

export interface Item {
  title: string;
  content: string;
}

/* eslint-disable-next-line */
export interface MyAccordionProps {
  items: Item[];
}
export interface MyAccordionState {
  activeIndex: number | null;
}

class MyAccordion extends React.Component<MyAccordionProps, MyAccordionState> {
  // Initialize the state.
  override state = { activeIndex: null };

  override render() {
    return (
      <div className={`${styles['container']} ui styled accordion`}>
        {this.renderItems()}
        {this.renderClickedItemIndex()}
      </div>
    );
  }

  onTitleClick = (index: number) => {
    this.setState({ activeIndex: index });
  };

  renderItems = () => {
    const itemsToRender = this.props.items.map(
      (item, index) => {
        const active = index === this.state.activeIndex ? 'active' : '';
        return (
          <React.Fragment key={item.title}>
            <div
              className={`title ${active}`}
              onClick={() => this.onTitleClick(index)}
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
    return itemsToRender;
  };

  renderClickedItemIndex = () => {
    if (this.state.activeIndex || this.state.activeIndex == 0) {
      return (
        <p>Clicked item index: {this.state.activeIndex}</p>
      );
    } else {
      return <p></p>;
    }
  };
}

export default MyAccordion;
