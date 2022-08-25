import {SearchActionTypes} from "../action-types/action-types";
import {RepositoriesAction} from "../actions/search-repositories-actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: RepositoriesAction): RepositoriesState => {
  switch(action.type) {
    case SearchActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case SearchActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case SearchActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
};

export default reducer;
