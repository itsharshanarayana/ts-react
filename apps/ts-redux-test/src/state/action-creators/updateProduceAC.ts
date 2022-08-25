import {FoodActionTypes} from "../action-types/food-action-types";
import {UpdateProduceAction} from "../actions/food-actions";


const updateProduceAC = (operation: string, index: number): UpdateProduceAction => {
  return {
    type: FoodActionTypes.UPDATE_PRODUCE,
    payload: {
      operation,
      index
    }
  };
};

export default updateProduceAC;

