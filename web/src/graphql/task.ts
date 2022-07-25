export const GET_TASKS = gql`
  query GetTasksQuery {
    tasks {
      id
      name
      detail
      priority
      tags {
        id
        name
        bg_color
        text_color
      }
      is_checked
      is_archived
      created_at
    }
  }
`

export const CREATE_TASK = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      detail
      priority
      tags {
        id
        name
        bg_color
        text_color
      }
      is_checked
      is_archived
      created_at
    }
    }
  }
`
