
import React, { Component } from 'react';
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";


const getBooksQuery = gql`
    {
        books {
            title
            id
        }
    }`

 class BookList extends Component {
     
    displayBooks = () => {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading Books ...</div>);
        } else {
            return data.books.map(book => {
                return (<li key={book.id}>{book.title}</li>);
            });
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
