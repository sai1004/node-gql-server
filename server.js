var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

// graphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root Resolver

var root = {
  message: () => " Hello World! "
};

// Create An Express Server and GraphQL End Point

var app = express();

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
);
