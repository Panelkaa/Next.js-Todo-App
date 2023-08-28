const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const app = express()
app.use(cors())

const users = [
    {id: 1, name: 'Max', surname: 'Volkov', email: 'max123@mail.ru', password: '123', todos: []},
    {id: 2, name: 'Nasty', surname: 'Volkova', email: 'nasty123@mail.ru', password: '321', todos: []},
]
const root = {
    getAllUsers: () => {
        return users
    },
    getUser: ({id}) => {
        return users.find(user => user.id == id)
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(5000, () => console.log('server started on port 5000'))

