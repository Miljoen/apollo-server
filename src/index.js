const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        name: 'Yoeri Moens',
        email: 'test@gmail.com',
        projects: [{title: 'Site upgrade'}]
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        projects: [{title: 'Site upgrade'}]
    },
];

const typeDefs = gql`    
    type User {
        name: String!
        email: String!
        projects: [Project!]!
    }
    
    type Project {
        title: String!
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
