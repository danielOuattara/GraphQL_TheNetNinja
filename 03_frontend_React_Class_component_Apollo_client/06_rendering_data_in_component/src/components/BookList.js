import { Component } from "react";
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
  displayBooks = () => {
    // console.log(this.props);
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Books ...</div>;
    } else {
      return data.books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.pages} pages
        </li>
      ));
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
