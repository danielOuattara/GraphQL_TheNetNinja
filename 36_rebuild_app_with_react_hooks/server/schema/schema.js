const graphql = require("graphql");
const _ = require("lodash");
const Book = require("./../models/book.js");
const Author = require("./../models/author.js");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull /* NEW */,
} = graphql;

//-------------------------------------------------------

// dummy data
// const books = [
//     { title: "Name of the wind", genre: "Fantasy",  id: "1", pages: "230", authorId: "1" },
//     { title: "The final empire", genre: "Fantasy",  id: "2", pages: "340", authorId: "2" },
//     { title: "The long earth",   genre: "Sci-Fi",   id: "3", pages: "520", authorId: "3" },
//     { title: "Dance the stars",  genre: "Novel",    id: "4", pages: "320", authorId: "3" },
//     { title: "The guitar play ", genre: "Music",    id: "5", pages: "270", authorId: "1" },
//     { title: "Swim in the sea",  genre: "Practics", id: "6", pages: "220", authorId: "2" },
//     { title: "Fight the vaccin", genre: "Novel",    id: "7", pages: "300", authorId: "2" },
// ];

// const authors = [
//     { name: "Patrick Rothfus", age: "44", id: "1" },
//     { name: "Bradon Sanderso", age: "42", id: "2" },
//     { name: "Terry Pratchett", age: "66", id: "3" },
// ];

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

//------------------------------------------------------
const Mutation = new GraphQLObjectType({
  // mutation = C U D on data
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });

        return author.save();
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
      resolve(parent, args) {
        let book = new Book({
          title: args.title,
          pages: args.pages,
          genre: args.genre,
          authorId: args.authorId,
        });

        return book.save();
      },
    },
  },
});

//-----------------------------------------------------
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
