import React from "react";

export const Greet = props => {
  return (
    <div>
      <h1>
        {props.name} is interested in {props.alias}
      </h1>
      {props.children}
    </div>
  );
};
