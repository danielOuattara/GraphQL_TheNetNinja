const graphql = require("graphql");
const _ = require("lodash");
const { authors, books } = require("./data");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;



//--------------------------------------------------
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    pages: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log("parent = ", parent);
        return _.find(authors, { id: parent.authorId });
      },
    },
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
        // args.id
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
