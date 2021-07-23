
const graphql = require("graphql");
const _ = require("lodash");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,

} = graphql;


// dummy data
const books = [
    { name: "Name of the wind", genre: "Fantasy",  id: "1", pages: "230", authorId: "1" },
    { name: "The final empire", genre: "Fantasy",  id: "2", pages: "340", authorId: "2" },
    { name: "The long earth",   genre: "Sci-Fi",   id: "3", pages: "520", authorId: "3" },
    { name: "Dance the stars",  genre: "Novel",    id: "4", pages: "320", authorId: "3" },
    { name: "The guitar play ", genre: "Music",    id: "5", pages: "270", authorId: "1" },
    { name: "Swim in the sea",  genre: "Practics", id: "6", pages: "220", authorId: "2" },
    { name: "Fight the vaccin", genre: "Novel",    id: "7", pages: "300", authorId: "2" },
];

const authors = [
    { name: "Patrick Rothfus", age: "44", id: "1" },
    { name: "Bradon Sanderso", age: "42", id: "2" },
    { name: "Terry Pratchett", age: "66", id: "3" },
];

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name:   { type: GraphQLString },
        genre:  { type: GraphQLString },
        pages:  { type: GraphQLString },
        author: { 
            type: AuthorType,
            resolve(parent,args) {
                console.log("parent = " , parent);
                return _.find(authors, {id: parent.authorId});
            }
        },
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    })
});

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
            }
        },

        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // args.id
                // code to get data from db/other source
                return _.find(authors, { id: args.id });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
});