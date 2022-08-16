import styles from './event-component.module.css';
import React from "react";

/* eslint-disable-next-line */
export interface EventComponentProps {}
const log = console.log;

const EventComponent: React.FC<EventComponentProps> = (props) => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('I am being dragged!')
    console.log('Event object value', event);
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to EventComponent!</h1>
      <input onChange={onChange}/>
      <br/>
      <br/>
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>
  );
}

export default EventComponent;
