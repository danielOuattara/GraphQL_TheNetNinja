import { GETONEBOOK } from "./../queries/queries";
import { useQuery } from "@apollo/client";
//----------------------------------------------------

const DisplayBookDetails = () => {
  const { book } = this.props.data;
  const { loading, error, data } = useQuery(GETONEBOOK);
  console.log("data = ", data);
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

function BookDetails() {
  return (
    <div id="book-details">
      <p>Output book details here !</p>
      <DisplayBookDetails />
    </div>
  );
}

export default BookDetails;

// export default graphql(GETONEBOOK, {
//   options: (props) => {
//     return {
//       variables: {
//         id: props.bookId,
//       },
//     };
//   },
// })(BookDetails);
