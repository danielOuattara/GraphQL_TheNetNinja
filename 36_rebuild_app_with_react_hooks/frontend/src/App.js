import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";
import AddingBook from "./components/AddingBook";
//-----------------------------------------------

// appolo client setting up
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

/* direct testing 
------------------*/
// client
//   .query({
//     query: gql`
//       query GetBooks {
//         books {
//           id
//           title
//           author {
//             name
//             age
//           }
//         }
//       }
//     `,
//   })

//   .then((result) => console.log(result))

//------------------------------------------------
export default function App() {
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
