import { Article } from "../../interfaces/interfaces";
import { ArticleActionTypes, ArticleAction } from "../../types/articles";

export interface SingleArticleState {
  article: Article | null;
  loading: boolean;
  error: null | string;
}

const initialState: SingleArticleState = {
  article: null,
  loading: false,
  error: null,
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): SingleArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE:
      return { article: null, error: null, loading: false };
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return { loading: false, error: null, article: action.payload };
    default:
      return state;
  }
};
