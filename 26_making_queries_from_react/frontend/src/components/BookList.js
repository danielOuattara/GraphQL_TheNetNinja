import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
//--------------------------------------------------------
const GETBOOKS = gql`
  {
    books {
      id
      title
      pages
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}
export default graphql(GETBOOKS)(BookList);
// use grahql to bind getBookQuery to BookList component
