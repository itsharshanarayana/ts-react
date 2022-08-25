import styles from './meat-dept.module.css';
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import updateMeatAC, {MeatAction} from "../../actions/updateMeatAC";
import {FoodData} from "../../reducers/rootReducer";
import {Button, ButtonGroup} from "@mui/material";

/* eslint-disable-next-line */
export interface MeatDeptProps {
  meatData: FoodData[];
  updateMeat: (operation: string, index: number) => MeatAction
}
export interface MeatDeptState {}

class MeatDept extends React.Component<MeatDeptProps, MeatDeptState> {

  increment = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateMeat(operation, index);
  }

  decrement = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateMeat(operation, index);
  }



  override render() {

    const meatDataToRender = this.props.meatData?.map(
      (f, i) => {
        return (
          <div key={i}>
            <p>{i + 1} - {f.food} - {f.quantity}</p>
            <ButtonGroup>
              <Button variant="contained" color="success" onClick={() => this.increment('+', i)}>+</Button>
              <Button variant="contained" color="error" onClick={() => this.decrement('-', i)}>-</Button>
            </ButtonGroup>
          </div>
        );
      }
    );
    return (
      <div className={styles['container']}>
        <h3>Meat Department</h3>
        {meatDataToRender}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    meatData: state.meat
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateMeat: updateMeatAC
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
