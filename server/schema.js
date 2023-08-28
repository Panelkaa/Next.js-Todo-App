const { buildSchema } = require('graphql')

const schema = buildSchema (`

    type User {
        id: ID
        name: String
        surname: String
        email: String
        password: String
        todos: [Todo]
    }

    type Todo {
        id: ID
        title: String
        completed: Boolean
    }

    input UserInput {
        id: ID
        name: String!
        surname: String!
        email: String!
        password: String!
        todos: [TodoInput]
    }

    input TodoInput {
        id: ID
        title: String!
        completed: Boolean
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        hello: String
    }
`)

module.exports = schema;