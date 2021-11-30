import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "./../queries/queries";

class AddBook extends Component {

    displayAuthor = () => {
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
                    <label htmlFor="bookName">Book Name : </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label htmlFor="genre">Genre : </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label htmlFor="author">Author : </label>
                    <select name="" id="">
                        <option value="">Select Author </option>
                        {this.displayAuthor()}
                    </select>
                </div>

                <button> Add </button>
            </form>
        )
    }
}
export default graphql(getAuthorsQuery)(AddBook);
