export default {

  Query: {
    getLogs: async (parents, args, { Log }) => {
      const logs = await Log.find()
      return logs.map(x => {
        x._id = x._id.toString()
        return x
      })
    }
  },
  Mutation: {
    createLog: async (parents, args, { Log }) => {
      const log = await new Log(args).save()
      log._id = log._id.toString()
      return log
    }
  }
}
