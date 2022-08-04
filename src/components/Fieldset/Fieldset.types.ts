import { Control, UseControllerProps } from "react-hook-form";

export type FieldsetProps<T> = OwnProps & OwnControllerProps<T>;

type OwnProps = {
  isFullWidth: boolean;
  inputWidth: string;
  isError: boolean;
  helperText?: string;
  required: boolean;
  label: string;
};

type OwnControllerProps<T> = Pick<UseControllerProps<T>, "name" | "rules"> & {
  control: Control<T, object>;
};