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
    address: Address
}

type Adult implements Human{
    name: String!
    job: String!
    address: Address
}

type Child implements Human{
    name: String!
    school: String!
    address: Address
}

type Address{
    streetNumber: String
    streetName: String
    postalCode: String
}

# Queries
type Query{
    makeMessage(messageText: String): Message
    libraries: [Library]
    people: [Person]
}

`