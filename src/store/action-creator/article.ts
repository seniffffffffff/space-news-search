import { Dispatch } from "react";
import axios from "axios";
import { ArticleActionTypes, ArticleAction } from "./../../types/articles";

export const fetchArticles = () => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_USERS });
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );
      dispatch({
        type: ArticleActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ArticleActionTypes.FETCH_USERS_ERROR,
        payload: "Error!!!",
      });
    }
  };
};

export const fetchArticle = (articleId: number) => {
  return async (dispatch: Dispatch<ArticleAction>) => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLE });
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`
      );
      dispatch({
        type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
    }
  };
};
