const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const graphqlHTTP = require("express-graphql").graphqlHTTP; // same as above
const app = express();
//--------------------------------------------------

const PORT = 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    /* schema missing here */
  }),
);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/graphql?`);
});
