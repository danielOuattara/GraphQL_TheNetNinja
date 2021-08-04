
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require(("./schema/schema.js"));
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false");
mongoose.connection.once("open", () => {
    console.log("Connnected to database !")
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Listening on port 4000 ! GraphQL")
})