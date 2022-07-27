import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
//--------------------------------------------------------

const GETBOOKS = gql`
  {
    books {
      title
      id
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Books ...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.title}</li>;
      });
    }
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}
export default graphql(GETBOOKS)(BookList);
// use grahql to bind getBookQuery to BookList component
