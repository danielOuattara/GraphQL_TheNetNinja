const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const graphqlHTTP = require("express-graphql").graphqlHTTP; // same as above
const app = express();
//--------------------------------------------------

app.use(
  "/graphql",
  graphqlHTTP({
    /* schema missing here */
  })
);

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000/graphql?");
});
