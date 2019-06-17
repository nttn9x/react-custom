import { useState } from "react";
import { ChangeEvent, MouseEvent } from "react";
import { History } from "history";

export function useFormInput(initialValue?: string): { value: string; onChange: any } {
  const [value, setValue] = useState(initialValue || "");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export function useButton(history: History): { isProcessing: boolean; onClick: any } {
  const [isProcessing, setProcessing] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);

      history.push("/home");
    }, 2000);
  }

  return { isProcessing, onClick: handleClick };
}
