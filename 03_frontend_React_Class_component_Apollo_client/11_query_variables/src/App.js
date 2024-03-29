import { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import BookList from "./components/BookList";
import AddingBook from "./components/AddingBook";
//---------------------------------------------------

// apollo-client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1> Ninja's Reading List </h1>
          <BookList />
          <AddingBook />
        </div>
      </ApolloProvider>
    );
  }
}
