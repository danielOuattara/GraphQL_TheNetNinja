const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;

//--------------------------------------------------
// dummy data
const books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1", pages: "230" },
  { name: "The final empire", genre: "Fantasy", id: "2", pages: "340" },
  { name: "The long earth", genre: "Sci-Fi", id: "3", pages: "120" },
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
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // args.id
        // code to get data from db/other source
        console.log(typeof args.id);
        return _.find(books, { id: args.id });
      },
    },
  },
});

//--------------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery,
});
