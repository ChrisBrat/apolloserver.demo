const {ApolloServer} = require('apollo-server')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

server.listen({port: 5000})