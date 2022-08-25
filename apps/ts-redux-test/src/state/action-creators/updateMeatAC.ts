import {UpdateMeatAction} from "../actions/food-actions";
import {FoodActionTypes} from "../action-types/food-action-types";

const updateMeatAC = (operation: string, index: number): UpdateMeatAction => {
  return {
    type: FoodActionTypes.UPDATE_MEAT,
    payload: {
      operation,
      index
    }
  };
};

export default updateMeatAC;
