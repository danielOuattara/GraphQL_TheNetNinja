import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GETONEBOOK } from "./../queries/queries";
//----------------------------------------------------

class BookDetails extends Component {
  displayBookDetails = () => {
    const { book } = this.props.data;
    if (!book) {
      return <div>No book selected yet ...</div>;
    } else {
      return (
        <div>
          <h2>{book.title} </h2>
          <p>{book.pages}</p>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>

          <h3>Same Author books: </h3>
          <ul className="other-books">
            {book.author.books.map((book) => {
              return <li key={book.id}> {book.title}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  render() {
    console.log("PROPS = ", this.props);
    return (
      <div id="book-details">
        <p>Output book details here !</p>
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(GETONEBOOK, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
