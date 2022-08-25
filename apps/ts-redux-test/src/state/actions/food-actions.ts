import {FoodActionTypes} from "../action-types/food-action-types";

interface FoodPayload {
  operation: string;
  index: number;
}

export interface UpdateFrozenAction {
  type: FoodActionTypes.UPDATE_FROZEN,
  payload: FoodPayload;
}

export interface UpdateMeatAction {
  type: FoodActionTypes.UPDATE_MEAT,
  payload: FoodPayload;
}

export interface UpdateProduceAction {
  type: FoodActionTypes.UPDATE_PRODUCE,
  payload: FoodPayload;
}

export type FoodAction = UpdateFrozenAction | UpdateMeatAction | UpdateProduceAction;
