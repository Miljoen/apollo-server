const {gql} = require('apollo-server');

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        projects: [Project!]
    }

    type Project {
        id: ID!
        title: String!
        active: Boolean
        users: [User!]!
    }

    type Query {
        users: [User!]!
    }
`;
