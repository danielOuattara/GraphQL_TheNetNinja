
import {gql} from "apollo-boost";

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            title
            id
        }
    }
`
// query vairiable in mutation below, starting with $ sign
const addBookMutation = gql`

    mutation ($title: String!, $genre: String!, $authorId: ID!) { 
        addBook(
            title: $title,
            genre: $genre,
            authorId: $authorId,            
        )
    }

`

export {getAuthorsQuery, getBooksQuery, addBookMutation}