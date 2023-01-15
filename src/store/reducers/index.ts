import { articlesReducer } from "./articlesReducer";
import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { inputReducer } from "./inputReducer";

export const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  value: inputReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
