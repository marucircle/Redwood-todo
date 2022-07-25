export const GET_TAGS = gql`
  query GetTagsQuery {
    tags {
      id
      name
      bg_color
      text_color
    }
  }
`

export const CREATE_TAG = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
      name
      bg_color
      text_color
    }
  }
`
