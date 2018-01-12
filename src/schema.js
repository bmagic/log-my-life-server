export default `
enum Category {
  FAMILY
  FRIEND
  SELF
  WIFE 
  WORK 
  HOME
}

type Log {
  _id: String!
  text: String!
  category: Category!
  startDate: Int!
  endDate:Int!
}

type Query{
  getLogs:[Log!]!
}

type Mutation {
  createLog(text:String!, category: Category!, startDate:Int!, endDate:Int! ):Log!
}
`
