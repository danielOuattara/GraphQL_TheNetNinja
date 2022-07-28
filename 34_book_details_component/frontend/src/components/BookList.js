import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GETBOOKS } from "./../queries/queries";
import BookDetails from "./BookDetails";
//-----------------------------------------------------------

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
    // console.log(this.props);
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(GETBOOKS)(BookList);
