const { ApolloServer, gql } = require('apollo-server');
const users = require('../database/mockdb').users();
const typeDefs = require('./graphql/schema').typeDefs();

const resolvers = {
    Query: {
        users: () => users,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server at ${url}`)
});
