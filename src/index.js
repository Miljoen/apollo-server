const { ApolloServer, gql } = require('apollo-server');
const users = require('../database/mockdb').users;

const typeDefs = gql`    
    type User {
        name: String!
        email: String!
        projects: [Project!]!
    }
    
    type Project {
        title: String!
        active: Boolean
        users: [User!]!
    }

    type Query {
        users: [User!]!
    }
`;

const resolvers = {
    Query: {
        users: () => users,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server at ${url}`)
});
