/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPomodoro = `query GetPomodoro($id: ID!) {
  getPomodoro(id: $id) {
    id
    name
    description
  }
}
`;
export const listPomodoros = `query ListPomodoros(
  $filter: ModelPomodoroFilterInput
  $limit: Int
  $nextToken: String
) {
  listPomodoros(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
