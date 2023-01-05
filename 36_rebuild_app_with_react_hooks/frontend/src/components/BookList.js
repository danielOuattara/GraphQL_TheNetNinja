import { useQuery } from "@apollo/client";
import { GETBOOKS } from "./../queries/queries";
import BookDetails from "./BookDetails";
//------------------------------------------------------

const [selected, setSelected] = null;

const DisplayBooks = () => {
  const { loading, error, data } = useQuery(GETBOOKS);
  if (error) {
    return <div>Error ...</div>;
  } else if (loading) {
    return <div>Loading books ...</div>;
  } else {
    return data.books.map((book) => {
      return (
        <li
          key={book.id}
          onClick={() => {
            setSelected({ selected: book.id });
          }}
        >
          {book.title}
        </li>
      );
    });
  }
};

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <DisplayBooks />
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}
export default BookList;

/* Using grahql to bind GETBOOKS to BockList component 
is no more necessary using useQuery 
*/
