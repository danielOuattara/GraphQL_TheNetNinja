import { gql, useQuery } from "@apollo/client";
//--------------------------------------------------------

const GETAUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

const DisplayAuthors = () => {
  const { loading, error, data } = useQuery(GETAUTHORS);
  if (error) {
    return <div>Error ...</div>;
  } else if (loading) {
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

function AddingBook() {
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
          <DisplayAuthors />
        </select>
      </div>

      <button>Add Book</button>
    </form>
  );
}
// using grahql to bind GETAUTHORS to AddBook component is no more necessary
export default AddingBook;
