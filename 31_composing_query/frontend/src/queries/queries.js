import { gql } from "@apollo/client";

//--------------------------------------------
const GETAUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

//--------------------------------------------
const GETBOOKS = gql`
  {
    books {
      title
      id
    }
  }
`;

const ADDBOOK_MUTATION = gql`
  mutation {
    addBook(title: "", genre: "", pages: "", authorId: "") {
      title
      id
    }
  }
`;

//--------------------------------------------
export { GETAUTHORS, GETBOOKS, ADDBOOK_MUTATION };
