import {
  ArticleActionTypes,
  ArticleAction,
  ArticleState,
} from "../../types/articles";

const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null,
};

export const articlesReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_USERS:
      return { loading: true, error: null, articles: [] };
    case ArticleActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, articles: action.payload };
    case ArticleActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, articles: [] };
    default:
      return state;
  }
};
