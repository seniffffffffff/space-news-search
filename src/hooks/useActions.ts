import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as ArticlesActionCreators from "../store/action-creator/article";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ArticlesActionCreators, dispatch);
};
