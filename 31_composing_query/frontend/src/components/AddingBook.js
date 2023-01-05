import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GETAUTHORS, ADDBOOK_MUTATION } from "../queries/queries";
import { flowRight as compose } from "lodash";
//--------------------------------------------------------

class AddingBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      authorId: "",
      pages: "",
    };
  }

  displayAuthor = () => {
    console.log("this.props = ", this.props);
    const data = this.props.GETAUTHORS_QUERY;
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
    // console.log(this.state);
    this.props
      .ADDBOOK_MUTATION()
      .then(() => console.log("Success"))
      .catch((error) => console.log(error.message));
  };

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label htmlFor="bookName">Book Title : </label>
          <input
            type="text"
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="genre">Genre : </label>
          <input
            type="text"
            onChange={(event) =>
              this.setState({ genre: Number(event.target.value) })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="pages">Pages : </label>
          <input
            type="number"
            onChange={(event) => this.setState({ pages: event.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="author">Author : </label>
          <select
            name="author"
            id="author"
            onChange={(event) =>
              this.setState({ authorId: event.target.value })
            }
          >
            <option value="">Select Author </option>
            {this.displayAuthor()}
          </select>
        </div>

        <button> Add </button>
      </form>
    );
  }
}

export default compose(
  graphql(GETAUTHORS, { name: "GETAUTHORS_QUERY" }),
  graphql(ADDBOOK_MUTATION, { name: "ADDBOOK_MUTATION" }),
)(AddingBook);
