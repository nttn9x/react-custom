import { useState } from "react";
import { ChangeEvent } from "react";
import { History } from "history";
import AuthReducer from "../../../store/auth.reducer";

export function useFormInput(initialValue?: string): { value: string; onChange: any } {
  const [value, setValue] = useState(initialValue || "");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export function useButton(history: History): { isProcessing: boolean; onClick: any } {
  const [isProcessing, setProcessing] = useState(false);

  function handleClick() {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);

      AuthReducer.authenticate(() => history.push("/"));
    }, 2000);
  }

  return { isProcessing, onClick: handleClick };
}
