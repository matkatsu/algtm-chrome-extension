import * as React from "react";
import "./Grid.css";

const Grid = props => {
  const listItems = props.list.map(item => {
    return (
      <li key={item.id}>
        <img src={item.url} className="cover" alt={item.word} />
      </li>
    );
  });
  return (
    <div>
      <ul className="grid">{listItems}</ul>
    </div>
  );
};

export default Grid;
