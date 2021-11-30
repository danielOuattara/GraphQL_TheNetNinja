
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const graphqlHTTP = require("express-graphql").graphqlHTTP; // same as above;
const schema = require(("./schema/schema.js"));
const app = express();

app.use("/graphql", graphqlHTTP({schema}) );

app.listen(4000, () => {
    console.log("Listening on port 4000 ! GraphQL")
})