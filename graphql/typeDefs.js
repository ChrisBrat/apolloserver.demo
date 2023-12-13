const {gql} = require('apollo-server')

module.exports = gql`

type Message{
    text : String
    count : Int
}


type Query{
    makeMessage(messageText: String): Message
}

`