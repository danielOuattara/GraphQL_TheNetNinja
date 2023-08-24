import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
//--------------------------------------------------------

const GETAUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthors = () => {
    const data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Books ...</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <form id="add-book">
        <div className="field">
          <label htmlFor="bookName">
            Book Name :
            <input type="text" id="bookName" name="bookName" />
          </label>
        </div>

        <div className="field">
          <label htmlFor="genre">
            Genre :
            <input type="text" id="genre" name="genre" />
          </label>
        </div>

        <div className="field">
          <label htmlFor="author">Author : </label>
          <select name="author" id="author">
            <option value="">Select Author </option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>Add Book</button>
      </form>
    );
  }
}

export default graphql(GETAUTHORS)(AddBook);
// use grahql to bind GETAUTHORS to AddBook component
