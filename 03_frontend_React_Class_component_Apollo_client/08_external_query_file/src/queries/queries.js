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
export { GETAUTHORS, GETBOOKS };
