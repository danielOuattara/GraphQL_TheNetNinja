
import React, { Component } from 'react';
import {graphql} from "react-apollo";
import { getOneBookQuery} from "./../queries/queries";

 class BookDetails extends Component {

    displayBookDetails = () => {

        const { book } = this.props.data;
        if(book) {
            return(
                <div>
                    <h2>Book infos </h2>
                    <p>{book.title}</p>
                    <p>{book.pages}</p>
                    <p>{book.genre}</p>
                    <p>{book.author}</p>
        
                    <h2>All Books from the same Author</h2>
                    <ul className="other-books">
                        {book.author.books.map(book => {
                            return <li key={book.id}> {book.title}</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>No book selected yet ...</div>
            );
        }
    }

    render() {
        console.log("PROPS = ", this.props)
        return (
            
            <div id="book-details">
               <p>Output book details here !</p>
               {/* {this.displayBookDetails()} */}
            </div>
        );
    }
}

export default graphql(getOneBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
