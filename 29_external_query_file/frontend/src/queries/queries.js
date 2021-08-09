
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

export {getAuthorsQuery, getBooksQuery}