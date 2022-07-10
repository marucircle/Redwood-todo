export const schema = gql`
  type Task {
    id: Int!
    name: String!
    detail: String!
    priority: Int!
    tags: [Tag]!
    is_checked: Boolean!
    is_archived: Boolean!
    created_at: DateTime!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    name: String!
    detail: String!
    priority: Int!
    tags: [Int]!
  }

  input UpdateTaskInput {
    name: String
    detail: String
    priority: Int
    tags: [Int]
    is_checked: Boolean
    is_archived: Boolean
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    updateCheckTask(id: Int!): Task! @requireAuth
    updateArchiveTask(id: Int!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
