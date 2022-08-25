import styles from './frozen-dept.module.css';
import {Typography} from "@mui/material";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import updateFrozenAC from "../../state/action-creators/updateFrozenAC";
import {UpdateFrozenAction} from "../../state/actions/food-actions";
import {FoodData} from "../../state/data-types/food-data-type";
import React from "react";

/* eslint-disable-next-line */
export interface FrozenDeptProps {
  frozenData: FoodData[];
}

export interface FrozenDeptState {
}

class FrozenDept extends React.Component<FrozenDeptProps, FrozenDeptState> {

  override render() {
    const frozenDataToRender = this.props.frozenData?.map((f: FoodData, i: number) => {
        return (
          <div>
            {i + 1} - {f.food} - {f.quantity}
          </div>
        );
      }
    );

    console.log(frozenDataToRender);
    return (
      <div className={styles['container']}>
        <Typography variant="h6">Welcome to FrozenDept!</Typography>
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

const mapDispatchToProps = (dispatch: Dispatch<UpdateFrozenAction>) => {
  return bindActionCreators({
    updateFrozen: updateFrozenAC
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
