import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './src/schema'
import resolvers from './src/resolvers'

const PORT = 3000

const app = express()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect('mongodb://192.168.1.10/test', { useMongoClient: true })
mongoose.Promise = global.Promise

const Log = mongoose.model('Log',
  {
    text: String,
    category: String,
    startDate: Number,
    endDate: Number
  }
)

app.use('/graphql', bodyParser.json(), graphqlExpress({schema, context: {Log}}))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) // if you want GraphiQL enabled

app.listen(PORT)
console.log(`Server is up and running : http://localhost:${PORT}/graphiql`)
