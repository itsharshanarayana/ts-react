import styles from './produce-dept.module.css';
import React from "react";
import {connect} from "react-redux";
import {FoodData} from "../../reducers/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import updateProduceAC from "../../actions/updateProduceAC";
import {ProduceAction} from "../../reducers/produceReducer";
import {Button, ButtonGroup} from "@mui/material";

/* eslint-disable-next-line */
export interface ProduceDeptProps {
  produceData?: FoodData[];
  updateProduce: (operation: string, index: number) => ProduceAction
}

export interface ProduceDeptState {
}

class ProduceDept extends React.Component<ProduceDeptProps, ProduceDeptState> {

  increment = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateProduce(operation, index);
  }

  decrement = (operation: string, index: number) => {
    console.log('Operation:', operation, ', index:', index);
    this.props.updateProduce(operation, index);
  }

  override render() {
    const produceDataToRender = this.props.produceData?.map(
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
        <h3>Produce Department</h3>
        {produceDataToRender}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    produceData: state.produce
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    updateProduce: updateProduceAC
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);
