import React, { Component } from "react";
import { ArticleItem } from "../ArticleItem/ArticleItem.jsx";
import { List } from "./ArticleList.js";

export class ArticleList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <List>
        {articles.map(({ objectID, url, title }) => (
          <ArticleItem key={objectID} id={objectID} url={url} title={title} />
        ))}
      </List>
    );
  }
}
