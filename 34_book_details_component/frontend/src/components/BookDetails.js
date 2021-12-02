
import React, { Component } from 'react';
import {graphql} from "react-apollo";
import { getOneBookQuery} from "./../queries/queries";

 class BookDetails extends Component {

    render() {
        console.log(this.props)
        return (
            <div id="book-details">
               <p>Output book details here !</p>
            </div>
        )
    }
}

export default graphql(getOneBookQuery)(BookDetails);
