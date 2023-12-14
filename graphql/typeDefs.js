const {gql} = require('apollo-server')

module.exports = gql`


# Message related types
type Message{
    text : String
    count : Int
}


# Library related types
type Library{
    branch: String
    books: [Book!]
}

type Book{
    title: String!
    author: Author! 
}

type Author{
    name: String
}

# Person related types
union Person = Adult | Child

interface Human{
    name: String!
}

type Adult implements Human{
    name: String!
    job: String!
}

type Child implements Human{
    name: String!
    school: String!
}

# Queries
type Query{
    makeMessage(messageText: String): Message
    libraries: [Library]
    people: [Person]
}

`