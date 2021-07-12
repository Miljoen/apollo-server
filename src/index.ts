const {ApolloServer, gql} = require('apollo-server');
import {typeDefs} from './graphql/schema';
import {resolvers} from './graphql/resolvers';
import {addUser, createUsersTable, getUsers, listTables} from "./utils";

// createUsersTable();
// listTables();
// addUser(1, 'Yoeri', 'yoeri@test.com', 'password');
// addUser(2, 'John', 'john@test.com', 'password');
// getUsers();

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}: { url: string }) => {
    console.log(`Server at ${url}`)
});
