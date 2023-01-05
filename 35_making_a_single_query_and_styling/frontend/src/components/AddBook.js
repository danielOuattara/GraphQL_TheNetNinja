import { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc'
import { GETAUTHORS, ADDBOOK_MUTATION, GETBOOKS } from '../queries/queries'
import { flowRight as compose } from 'lodash'
//--------------------------------------------------------

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      genre: '',
      authorId: '',
      pages: '',
    }
    this.submitForm = this.submitForm.bind(this)
  }

  displayAuthor = () => {
    let data = this.props.GETAUTHORS
    if (data.loading) {
      return <option disabled>Loading Books ...</option>
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        )
      })
    }
  }

  submitForm = (event) => {
    event.preventDefault()
    // console.log(this.state);
    this.props
      .ADDBOOK_MUTATION({
        variables: {
          title: this.state.title,
          genre: this.state.genre,
          pages: Number(this.state.pages),
          authorId: this.state.authorId,
        },
        refetchQueries: [{ query: GETBOOKS }], // fetch again all books after adding one book
      })
      .then(() => console.log('Success'))
      .catch((error) => console.log(error.message))
  }

  render() {
    // console.log(this.props)
    return (
      <form id="add-book" onSubmit={this.submitForm}>
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
            onChange={(event) => this.setState({ genre: event.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="genre">Pages : </label>
          <input
            type="number"
            min="1"
            onChange={(event) => this.setState({ pages: event.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="author">Author : </label>
          <select
            name=""
            id=""
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
    )
  }
}

export default compose(
  graphql(GETAUTHORS, { name: 'GETAUTHORS' }),
  graphql(ADDBOOK_MUTATION, { name: 'ADDBOOK_MUTATION' }),
)(AddBook)
