const messageResolvers = require('./messages')
const bookResolvers = require('./books')

module.exports = {
    Query: {
        ...messageResolvers.Query,
        ...bookResolvers.Query
    },
    Library: bookResolvers.Library,
    Book: bookResolvers.Book,
    Person: bookResolvers.Person,
    Child: bookResolvers.Child
    // ,
    // Mutation: {
    //    ...messageResolvers.Mutation
    // }
}
