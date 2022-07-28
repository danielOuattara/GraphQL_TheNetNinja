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
  console.log(props); // <-- preview data here
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
}

// use grahql to bind GETBOOKS query to BookList component
export default graphql(GETBOOKS)(BookList);
