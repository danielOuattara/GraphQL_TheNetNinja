
import {gql} from "apollo-boost";

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            title
            id
        }
    }
`;

const addBookMutation = gql`
    mutation {
        addBook(
            title: "",
            genre: "",
            authorId: "",            
        ) {
            name
            id
        }
    }
`;

export {getAuthorsQuery, getBooksQuery, addBookMutation}