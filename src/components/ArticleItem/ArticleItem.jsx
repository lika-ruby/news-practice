import React, { Component } from "react";
import { Item, Link } from "./ArticleItem";

export class ArticleItem extends Component {
  render() {
    const { objectID, url, title } = this.props;
    return (
      <Item id={objectID}>
        <Link href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </Link>
      </Item>
    );
  }
}
