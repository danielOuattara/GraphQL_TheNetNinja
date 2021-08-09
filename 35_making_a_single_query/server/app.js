
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require(("./schema/schema.js"));
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow CORS

app.use(cors());

mongoose.connect("mongodb://localhost:27017/graphql_the_net_ninja",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("* * * ! Success: Database connected !  * * * "))
    .catch(err => console.log(err.message));

mongoose.connection.once("open", () => {
    console.log("Connnected to database !")
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.use("/", (req, res) => {
    res.sendStatus(200).json({ message: "Successfull" })

});


app.listen(4000, () => {
    console.log("Listening on port 4000 ! GraphQL")
})