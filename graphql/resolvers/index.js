const messageResolvers = require('./messages')
const bookResolvers = require('./books')

module.exports = {
    Query: {
        ...messageResolvers.Query,
        ...bookResolvers.Query
    },
    Library: bookResolvers.Library,
    Book: bookResolvers.Book
    // ,
    // Mutation: {
    //    ...messageResolvers.Mutation
    // }
}
