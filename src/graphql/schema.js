const { gql } = require('apollo-server');

const typeDefs = () => {
    return gql`
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
};

exports.typeDefs = typeDefs;
