

import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { getAuthorsQuery} from "./../queries/queries";

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            genre: "",
            authorId: ""
        }

    }

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

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form id="add-book" onSubmit= {this.submitForm.bind(this)}>
                <div className="field">
                    <label htmlFor="bookName">Book Title : </label>
                    <input type="text" 
                           onChange= { (event) => this.setState({ title: event.target.value})}/>
                </div>

                <div className="field">
                    <label htmlFor="genre">Genre : </label>
                    <input type="text"
                           onChange={(event) => this.setState({ genre: event.target.value })} />
                </div>

                <div className="field">
                    <label htmlFor="author">Author : </label>
                    <select name="" id=""
                            onChange={(event) => this.setState({ author: event.target.value })}>
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
