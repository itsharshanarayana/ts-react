import styles from './parent.module.css';
import {ChildAsFC} from "../child/child";

/* eslint-disable-next-line */
export interface ParentProps {}

export function Parent(props: ParentProps) {
  return (
    <div className={styles['container']}>
      {/*<Child color="Red" onClick={() => console.log("Clicked!")} />*/}
      <br/>
      <ChildAsFC color="Blue" onClick={() => console.log("FC Clicked!")}>
        Test
      </ChildAsFC>
    </div>
  );
}

export default Parent;
