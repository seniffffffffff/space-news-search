import { SearchInput } from "../interfaces/interfaces";

export interface InputState {
  value: string;
}

export enum InputValuesTypes {
  CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE",
}

interface ChangeInputValue {
  type: InputValuesTypes.CHANGE_INPUT_VALUE;
  payload: SearchInput;
}

export type SeachInputAction = ChangeInputValue;
