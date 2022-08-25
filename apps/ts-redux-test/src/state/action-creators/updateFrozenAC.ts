import {FoodActionTypes} from "../action-types/food-action-types";
import {UpdateFrozenAction} from "../actions/food-actions";

const updateFrozenAC = (operation: string, index: number): UpdateFrozenAction => {
  return {
    type: FoodActionTypes.UPDATE_FROZEN,
    payload: {
      operation,
      index
    }
  }
};

export default updateFrozenAC;
