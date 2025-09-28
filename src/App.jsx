import React, { Component } from "react";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { GlobalStyle } from "./GlobalStyles.js";
import { Container, Main } from "./App.js";

import { ArticleList } from "./components/ArticleList/ArticleList.jsx";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await axios.get("/search?query=react");
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Main>
        <GlobalStyle />
        <Container>
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && (
            <Blocks
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          )}
          {articles.length > 0 && <ArticleList articles={articles} />}
        </Container>
      </Main>
    );
  }
}

export default App;
