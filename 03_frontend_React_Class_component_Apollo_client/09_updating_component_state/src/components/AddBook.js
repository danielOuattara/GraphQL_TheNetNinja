import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GETAUTHORS } from "./../queries/queries";
//--------------------------------------------------------

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      authorId: "",
    };
    this.submitForm = this.submitForm.bind(this);
  }

  displayAuthor = () => {
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

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ title: "", genre: "", authorId: "" });
  };

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label htmlFor="bookName">
            Book Title :
            <input
              type="text"
              onChange={(event) => this.setState({ title: event.target.value })}
              required
              value={this.state.title}
            />
          </label>
        </div>

        <div className="field">
          <label htmlFor="genre">
            Genre :
            <input
              type="text"
              onChange={(event) => this.setState({ genre: event.target.value })}
              required
              value={this.state.genre}
            />
          </label>
        </div>

        <div className="field">
          <label htmlFor="author">Author : </label>
          <select
            name="author"
            id="author"
            required
            onChange={(event) =>
              this.setState({ authorId: event.target.value })
            }
          >
            <option value="">Select An Author </option>
            {this.displayAuthor()}
          </select>
        </div>

        <button> Add Book </button>
      </form>
    );
  }
}

export default graphql(GETAUTHORS)(AddBook);
