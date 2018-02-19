import * as React from "react";
import Search from "./Search";
import Grid from "./Grid";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:29903/api/",
  timeout: 1000
});

// const handleClick = () => {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      list: []
    };
  }
  handleSubmit(e) {
    instance
      .get("/v1/search", {
        params: {
          word: this.state.word
        }
      })
      .then(response => {
        const list = response.data.result;
        if (!list) {
          this.setState({ ...this.state, list: [] });
          return;
        }
        this.setState({ ...this.state, list });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChang(e) {
    this.setState({ ...this.state, word: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div className="app">
        <Search
          word={this.state.word}
          onChange={e => this.handleChang(e)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <Grid list={this.state.list} />
      </div>
    );
  }
}

export default App;
