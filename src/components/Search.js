import * as React from "react";
import "./Search.css";

const Search = props => (
  <div className="search">
    <input
      type="text"
      id="freeword"
      value={props.word}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  </div>
);

export default Search;
