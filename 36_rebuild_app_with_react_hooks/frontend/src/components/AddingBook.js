import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
//--------------------------------------------------------

const GETAUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddingBook(props) {
  const displayAuthors = () => {
    let data = props.data;
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
          {displayAuthors()}
        </select>
      </div>

      <button>Add Book</button>
    </form>
  );
}
// use grahql to bind GETAUTHORS to AddBook component
export default graphql(GETAUTHORS)(AddingBook);
