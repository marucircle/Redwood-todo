export const schema = gql`
  type Tag {
    id: Int!
    name: String!
    bg_color: String!
    text_color: String!
    user: User!
    user_id: Int!
    created_at: DateTime!
    tasks: [Task]!
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: Int!): Tag @requireAuth
  }

  input CreateTagInput {
    name: String!
    bg_color: String!
    text_color: String!
  }

  input UpdateTagInput {
    name: String
    bg_color: String
    text_color: String
    user_id: Int
    created_at: DateTime
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: Int!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: Int!): Tag! @requireAuth
  }
`
