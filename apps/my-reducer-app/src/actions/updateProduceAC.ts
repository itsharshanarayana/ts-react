import {ProduceAction} from "../reducers/produceReducer";


export default (operation: string, index: number): ProduceAction => {
  return {
    type: 'UPDATE_PRODUCE',
    payload: {
      operation,
      index
    }
  }
};
