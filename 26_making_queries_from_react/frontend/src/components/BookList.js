
import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";


const getBooksQuery = gql`
    {
        books {
            title
            id
        }
    }`

 class BookList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}
export default graphql(getBooksQuery)(BookList);
        // use grahql to bind getBookQuery to BookList component
