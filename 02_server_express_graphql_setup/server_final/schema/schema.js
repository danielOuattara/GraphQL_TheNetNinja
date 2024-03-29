const Book = require("./../models/bookModel.js");
const Author = require("./../models/authorModel.js");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull /* <--- NEW */,
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
        return Author.findById(parent.authorId);
      },
    },
  }),
});

//-------------------------------------------------------
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
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
        return Book.findById(args.id);
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      },
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      },
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({});
      },
    },
  },
});

//-------------------------------------------------------
// INFO :  => mutation = CRUD on data
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      // resolve(parent, args) {
      //   let author = new Author({
      //     name: args.name,
      //     age: args.age,
      //   });
      //   return author.save();
      // },
      resolve(parent, args) {
        return Author.create(args);
      },
    },

    addBook: {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
        pages: { type: new GraphQLNonNull(GraphQLInt) },
      },
      // resolve(parent, args) {
      //   let book = new Book({
      //     title: args.title,
      //     pages: args.pages,
      //     genre: args.genre,
      //     authorId: args.authorId,
      //   });
      //   return book.save();
      // },
      resolve(parent, args) {
        return Book.create(args);
      },
    },
  },
});

//-------------------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
