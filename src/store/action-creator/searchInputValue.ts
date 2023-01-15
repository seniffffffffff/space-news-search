import { InputValuesTypes } from "../../types/inputValues";

export const changeInputValue = (value: string) => ({
  type: InputValuesTypes.CHANGE_INPUT_VALUE,
  payload: value,
});
