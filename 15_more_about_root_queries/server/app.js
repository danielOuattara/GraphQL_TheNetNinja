const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const graphqlHTTP = require("express-graphql").graphqlHTTP; // same as above;
const schema = require("./schema/schema.js");
const app = express();

//------------------------------------------------------
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000/graphql?");
});
