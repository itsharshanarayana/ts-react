import {Payload} from "../reducers/rootReducer";

export interface MeatAction {
  type: 'UPDATE_MEAT',
  payload: Payload
}

export default (operation: string, index: number): MeatAction => {
  return {
    type: 'UPDATE_MEAT',
    payload: {
      operation,
      index
    }
  }
};
