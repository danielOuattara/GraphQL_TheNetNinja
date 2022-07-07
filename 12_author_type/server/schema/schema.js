const graphql = require("graphql");
const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;
//--------------------------------------------------

// dummy data
const books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1", pages: "230" },
  { name: "The final empire", genre: "Fantasy", id: "2", pages: "340" },
  { name: "The long earth", genre: "Sci-Fi", id: "3", pages: "120" },
];

const authors = [
  { name: "Patrick Rothfus", age: "44", id: "1" },
  { name: "Bradon Sanderso", age: "42", id: "2" },
  { name: "Terry Pratchett", age: "66", id: "3" },
];

//--------------------------------------------------
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    pages: { type: GraphQLString },
  }),
});

//--------------------------------------------------
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

//--------------------------------------------------
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // args.id
        // code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(authors, { id: args.id });
      },
    },
  },
});

//--------------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery,
});
