
import React, { Component } from 'react';
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }`// < -- caution on left: do not delete


class AddBook extends Component {

    displayAuthors = () => {
        let data = this.props.data;
        if (data.loading) {
            return (<option disabled>Loading Books ...</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }

    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label htmlFor="bookName">Book Name : <input type="text" id="bookName" name="bookName" /> </label>
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre : <input type="text" id="genre" name="genre" /> </label>
                </div>

                <div className="field">
                    <label htmlFor="author">Author : </label>
                    <select name="" id="">
                        <option value="">Select Author </option>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button> + </button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
