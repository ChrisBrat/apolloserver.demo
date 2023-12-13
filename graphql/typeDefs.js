const {gql} = require('apollo-server')

module.exports = gql`

type Message{
    text : String
    count : Int
}

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


type Query{
    makeMessage(messageText: String): Message
    libraries: [Library]
}

`