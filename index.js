const { ApolloServer } = require('apollo-server');
const data = require('./data/books');
const typeDefs = require('./types/books');

const resolvers = { Query: { books: () => data } };
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
