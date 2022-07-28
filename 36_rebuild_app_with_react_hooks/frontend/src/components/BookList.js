import { gql, useQuery } from "@apollo/client";
//------------------------------------------------------

const GETBOOKS = gql`
  {
    books {
      title
      id
    }
  }
`;

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GETBOOKS);
  if (error) {
    return <div>Error ...</div>;
  } else if (loading) {
    return <div>Loading books ...</div>;
  } else {
    return data.books.map((book) => {
      return <li key={book.id}>{book.title}</li>;
    });
  }
};

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <DisplayBooks />
      </ul>
    </div>
  );
}
// using grahql to bind GETBOOKS to BockList component is no more necessary
export default BookList;
