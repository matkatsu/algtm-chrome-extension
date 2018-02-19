import * as React from "react";
import ReactTooltip from "react-tooltip";
import "./Grid.css";

const Grid = props => {
  const listItems = props.list.map(item => {
    return (
      <li key={item.id}>
        <img
          src={item.url}
          className="cover"
          alt={item.word}
          data-tip
          data-for={String(item.id)}
        />
        <ReactTooltip
          id={String(item.id)}
          place="top"
          type="dark"
          effect="float"
        >
          <span>{item.word}</span>
        </ReactTooltip>
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
