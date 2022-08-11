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

export const GET_TASK = gql`
  query GetTaskQuery($id: Int!) {
    task(id: $id) {
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

export const UPDATE_CHECK_TASK = gql`
  mutation UpdateCheckTask($id: Int!) {
    updateCheckTask(id: $id) {
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

export const UPDATE_ARCHIVE_TASK = gql`
  mutation UpdateArchiveTask($id: Int!) {
    updateArchiveTask(id: $id) {
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
`

export const DELETE_TASK = gql`
  mutation DeleteTaskMutation($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`
