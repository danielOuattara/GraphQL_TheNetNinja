
const graphql = require("graphql");
const _ = require("lodash");

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;


// dummy data
const Books= [
    {name:"Name of the wind", genre:"Fantasy", id:"1"},
    {name:"The final empire", genre:"Fantasy", id:"2"},
    {name:"The long earth", genre:"Sci-Fi", id:"3"},
];

const BookType = new GraphQLObjectType({
    name: "Book",
    fields:() => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // args.id
                // code to get data from db/other source
                 return _.find(books, {id: args.id} );
            }
        }
    }
});


module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
});