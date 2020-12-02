import React from "react";

export default function ColorChange(props) {
  console.log(props);
  return (
    <button className={props.color} onClick={() => props.setColor(props.color)}>
      {props.color}
    </button>
  );
}
