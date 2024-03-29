require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const app = express();
//-------------------------------------------------------

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Successfull" });
});

//-------------------------------------------------------

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      `* * * ! Success: Database connected to:  ${process.env.DATABASE} database * * * `
    );
    app.listen(4000, () => {
      console.log("Listening on http://localhost:4000/graphql?");
    });
  })
  .catch((err) => console.log(err.message));
