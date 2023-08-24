import { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { GETONEBOOK } from "./../queries/queries";
//----------------------------------------------------

class BookDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="book-details">
        <p>Output book details here !</p>
      </div>
    );
  }
}

export default graphql(GETONEBOOK)(BookDetails);
