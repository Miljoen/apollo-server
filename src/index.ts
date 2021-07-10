const { ApolloServer, gql } = require('apollo-server');
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}:{url: string}) => {
    console.log(`Server at ${url}`)
});
