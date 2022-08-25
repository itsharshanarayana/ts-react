import {FrozenAction} from "../reducers/frozenReducer";


export default (operation: string, index: number): FrozenAction => {
  console.log('updateFrozenAC:', operation, index);
  return {
    type: 'UPDATE_FROZEN',
    payload: {
      operation,
      index
    }
  };
}
