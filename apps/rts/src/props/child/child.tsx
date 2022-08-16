import styles from './child.module.css';
import React from "react";

/* eslint-disable-next-line */
interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

/*export const Child = ({color, onClick }: ChildProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Child! {color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}*/

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Child! {color}</h1>
      <p>{children}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
