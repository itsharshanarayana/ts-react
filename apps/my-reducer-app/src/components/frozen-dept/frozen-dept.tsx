import styles from './frozen-dept.module.css';
import React from "react";
import {FrozenAction} from "../../reducers/frozenReducer";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import updateFrozenAC from "../../actions/updateFrozenAC";
import {FoodData} from "../../reducers/rootReducer";
import {Button, ButtonGroup} from "@mui/material";

/* eslint-disable-next-line */
export interface FrozenDeptProps {
  frozenData?: FoodData[];
  updateFrozen: (operation: string, index: number) => FrozenAction
}

export interface FrozenDeptState {
}

class FrozenDept extends React.Component<FrozenDeptProps, FrozenDeptState> {

  increment = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateFrozen(operation, index);
  }

  decrement = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateFrozen(operation, index);
  }

  override render() {
    const frozenDataToRender = this.props.frozenData?.map(
      (f, i) => {
        return (
          <div key={i}>
            <p>{i+1} - {f.food} - {f.quantity}</p>
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
        <h3>Frozen Department</h3>
        {frozenDataToRender}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    frozenData: state.frozen
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateFrozen: updateFrozenAC
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
