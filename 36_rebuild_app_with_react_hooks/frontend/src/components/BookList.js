import { graphql } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
//------------------------------------------------------

const GETBOOKS = gql`
  {
    books {
      title
      id
    }
  }
`;

function BookList(props) {
  const displayBooks = () => {
    let data = props.data;
    if (data.loading) {
      return <div>Loading books ...</div>;
    } else {
      return data.books.map((book) => {
        return <li key={book.id}>{book.title}</li>;
      });
    }
  };
  console.log(props); // <-- preview data here
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}

// use grahql to bind GETBOOKS query to BookList component
export default graphql(GETBOOKS)(BookList);
