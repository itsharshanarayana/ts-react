import {SearchActionTypes} from "../action-types/action-types";

interface SearchRepositories {
  type: SearchActionTypes.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccess {
  type: SearchActionTypes.SEARCH_REPOSITORIES_SUCCESS,
  payload: string[];
}

interface SearchRepositoriesError {
  type: SearchActionTypes.SEARCH_REPOSITORIES_ERROR,
  payload: string;
}

// Type union
export type RepositoriesAction = SearchRepositories | SearchRepositoriesSuccess | SearchRepositoriesError;
