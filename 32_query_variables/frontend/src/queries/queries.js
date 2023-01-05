import { gql } from "@apollo/client";
//---------------------------------------------

const GETAUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

//--------------------------------------------
const GETBOOKS = gql`
  query GetBooks {
    books {
      title
      id
    }
  }
`;

// query variable in mutation below, starting with $ sign
const ADDBOOK_MUTATION = gql`
  mutation AddBook(
    $title: String!
    $genre: String!
    $authorId: ID!
    $pages: Int!
  ) {
    addBook(title: $title, genre: $genre, authorId: $authorId, pages: $pages) {
      id
      title
      pages
      author {
        name
        age
      }
    }
  }
`;

//--------------------------------------------
export { GETAUTHORS, GETBOOKS, ADDBOOK_MUTATION };
