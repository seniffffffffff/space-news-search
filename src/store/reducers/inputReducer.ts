import {
  InputState,
  InputValuesTypes,
  SeachInputAction,
} from "./../../types/inputValues";

const intialValue: InputState = {
  value: "",
};

export const inputReducer = (state = intialValue, action: SeachInputAction) => {
  switch (action.type) {
    case InputValuesTypes.CHANGE_INPUT_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
      break;
  }
};
