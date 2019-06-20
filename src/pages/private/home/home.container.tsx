import React from "react";

import style from "./home.scss";

import InputComponent from "./input/input.component";
import ListComponent from "./list/list.component";

import { TodoContext } from "./home.context";
import { useOwnRedux } from "./home.hook";

const Home: React.FC = () => {
  const { state, dispatch, actions } = useOwnRedux();

  return (
    <TodoContext.Provider value={{ state, dispatch, actions }}>
      <div className={style.home}>
        <h1>HELLO</h1>
        <InputComponent />
        <ListComponent />
      </div>
    </TodoContext.Provider>
  );
};

export default Home;
