import { gql } from "@apollo/client";

//---------------------------------------------
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
// query variable in mutation below, starting with $ sign
const ADDBOOK_MUTATION = gql`
  mutation ($title: String!, $genre: String!, $authorId: ID!, $pages: Int!) {
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
const GETONEBOOK = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      title
      genre
      pages
      author {
        id
        name
        age
        books {
          id
          title
          pages
        }
      }
    }
  }
`;

//--------------------------------------------
export { GETAUTHORS, GETBOOKS, ADDBOOK_MUTATION, GETONEBOOK };
