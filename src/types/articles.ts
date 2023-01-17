import { Article } from "../interfaces/interfaces";

export interface ArticleState {
  articles: any[];
  loading: boolean;
  error: null | string;
}

export enum ArticleActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  FETCH_ARTICLE = "FETCH_ARTICLE",
  FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS",
}

interface FetchArticleAction {
  type: ArticleActionTypes.FETCH_ARTICLE;
}

interface FetchArticleSuccess {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: Article;
}

interface FetchArticlesAction {
  type: ArticleActionTypes.FETCH_USERS;
}

interface FetchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchArticleErrorAction {
  type: ArticleActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type ArticleAction =
  | FetchArticlesAction
  | FetchArticleSuccessAction
  | FetchArticleErrorAction
  | FetchArticleAction
  | FetchArticleSuccess;
