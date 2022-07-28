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

//--------------------------------------------
export { GETAUTHORS, GETBOOKS };
