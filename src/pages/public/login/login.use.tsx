import { useState } from "react";

export interface IFormInput {
  value: string;
  onChange: any;
}

export function useFormInput(initValue: string = ""): IFormInput {
  const [value, setValue] = useState(initValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
