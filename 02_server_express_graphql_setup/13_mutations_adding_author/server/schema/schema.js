const graphql = require("graphql");
const _ = require("lodash");

const BookModel = require("./../models/bookModel.js");
const AuthorModel = require("./../models/authorModel.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;
//-------------------------------------------------------

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    pages: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // console.log("parent = " , parent);
        // return _.find(authors, {id: parent.authorId});
      },
    },
  }),
});

//------------------
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        // console.log(" parent = ", parent);
        // return _.filter(books, { authorId: parent.id})
      },
    },
  }),
});

//-------------------------------------------------------
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // args.id
        // code to get data from db/other source
        // return _.find(books, { id: args.id });
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // args.id
        // code to get data from db/other source
        // return _.find(authors, { id: args.id });
      },
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
      },
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
      },
    },
  },
});

//-------------------------------------------------------
// INFO : => mutation = CRUD on data
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let author = new AuthorModel({
          name: args.name,
          age: args.age,
        });

        return author.save();
      },
    },
  },
});

//-------------------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
