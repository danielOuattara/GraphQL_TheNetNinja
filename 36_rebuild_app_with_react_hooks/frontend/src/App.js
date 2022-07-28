import "./App.css";
import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import AddingBook from "./components/AddingBook";
//-----------------------------------------------

// appolo client setting up
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

// direct testing
client
  .query({
    query: gql`
      query GetBooks {
        books {
          id
          title
          author {
            name
            age
          }
        }
      }
    `,
  })

  .then((result) => console.log(result));

//------------------------------------------------
function App() {
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

export default App;
