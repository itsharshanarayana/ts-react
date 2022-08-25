import axios from 'axios';
import {SearchActionTypes} from "../action-types/action-types";
import {RepositoriesAction} from "../actions/search-repositories-actions";
import {Dispatch} from "redux";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>) => {
    dispatch({
      type: SearchActionTypes.SEARCH_REPOSITORIES
    });

    try {
        console.log('test');
        const {data} = await axios.get('https://registry.npmjs.org/-v1/search', {
          params: {
            text: term
          }
        });

        const package_names = data.objects.map((result: any) => {
          return result.package.name;
        });

        dispatch({
          type: SearchActionTypes.SEARCH_REPOSITORIES_SUCCESS,
          payload: package_names
        });
    } catch (err) {
      dispatch({
        type: SearchActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: 'Something went wrong!' //err.message
      });
    }
  }
};

export default searchRepositories;
