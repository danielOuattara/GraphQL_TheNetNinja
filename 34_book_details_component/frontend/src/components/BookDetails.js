
import React, { Component } from 'react';
import {graphql} from "react-apollo";
import { getOneBookQuery} from "./../queries/queries";

 class BookDetails extends Component {

    displayBook = () => {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading Books ...</div>);
        } else {
            return data.books.map(book => {
                    return (<li key={ book.id}>{ book.title}</li>);
            });
        }
    }

    render() {
        console.log(this.props)
        return (
            <div id="book-details">
               <p>Output book details</p>
            </div>
        )
    }
}

export default graphql(getOneBookQuery)(BookDetails);
