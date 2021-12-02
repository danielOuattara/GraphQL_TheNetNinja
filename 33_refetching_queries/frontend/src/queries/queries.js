
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

// query variable in mutation below, starting with $ sign
const addBookMutation = gql`

    mutation ($title: String!, $genre: String!, $authorId: ID!, $pages: Int!) { 
        addBook(
            title: $title,
            genre: $genre,
            authorId: $authorId, 
            pages: $pages           
        ) {
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

export {getAuthorsQuery, getBooksQuery, addBookMutation};