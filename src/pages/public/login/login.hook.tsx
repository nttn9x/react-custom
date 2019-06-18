import { useState } from "react";
import { ChangeEvent } from "react";
import { History } from "history";
import { Dispatch } from "redux";
import { SetUserAction } from "../../../store/auth.reducer";

export function useFormInput(initialValue?: string): { value: string; onChange: any } {
  const [value, setValue] = useState(initialValue || "");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export function useButton(
  history: History,
  dispatch: Dispatch<SetUserAction>,
): { isProcessing: boolean; onClick: any } {
  const [isProcessing, setProcessing] = useState(false);

  function handleClick() {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);

      dispatch({ type: "SET_USER", payload: { username: "nguyenntt", fullname: "Nguyen TT Nguyen" } });

      history.push("/");
    }, 2000);
  }

  return { isProcessing, onClick: handleClick };
}
