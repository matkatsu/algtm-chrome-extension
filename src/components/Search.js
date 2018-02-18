import * as React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://aikatsup.com/api/",
  timeout: 1000
});

instance
  .get("/v1/info")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

const handleClick = () => {
  // APIにアクセス、stateを更新
};

const Search = () => (
  <div className="search">
    <input type="text" id="freeword" />
    <button type="button" onClick={handleClick}>
      reload
    </button>
  </div>
);

export default Search;
