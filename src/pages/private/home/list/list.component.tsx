import React, { useContext } from "react";

import { TodoContext } from "../home.context";
import { ITodoContext } from "../home.types";

const HomeList: React.FC = () => {
  const { state } = useContext<ITodoContext>(TodoContext);

  return (
    <div className="input">
      {state
        .get("tasks")
        .valueSeq()
        .map((o: any, i: number) => (
          <div key={i}>{o}</div>
        ))}
    </div>
  );
};

export default HomeList;
