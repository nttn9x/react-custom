import React, { useState, useContext, ChangeEvent } from "react";

import { TodoContext } from "../home.context";
import { ADD_TODO } from "../home.types";

import style from "../home.scss";

interface HomeInputProps {
  onClick?: any;
}

function useHookInput(dispatch: any) {
  const [textsearch, setTextsearch] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTextsearch(e.target.value);
  }

  function handleClick() {
    dispatch({ type: ADD_TODO, payload: { taskName: textsearch } });

    setTextsearch("");
  }

  return { textsearch, onchange: handleChange, onClick: handleClick };
}

const HomeInput: React.FC<HomeInputProps> = () => {
  const { dispatch } = useContext(TodoContext);
  const { textsearch, onchange, onClick } = useHookInput(dispatch);

  console.log("HomeInput");

  return (
    <div className={style.home__input}>
      <input type="text" value={textsearch} onChange={onchange} />
      <button onClick={() => onClick()}>Add</button>
    </div>
  );
};

export default HomeInput;
