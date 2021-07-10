const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schema').typeDefs();
const resolvers = require('./graphql/resolvers').resolvers();

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server at ${url}`)
});
