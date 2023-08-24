import { gql } from "@apollo/client";

//--------------------------------------------
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

//--------------------------------------------
const ADDBOOK_MUTATION = gql`
  mutation {
    addBook(title: "", genre: "", pages: "", authorId: "") {
      id
      title
    }
  }
`;

//--------------------------------------------
export { GETAUTHORS, GETBOOKS, ADDBOOK_MUTATION };
