/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPomodoro = `mutation CreatePomodoro(
  $input: CreatePomodoroInput!
  $condition: ModelPomodoroConditionInput
) {
  createPomodoro(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
export const updatePomodoro = `mutation UpdatePomodoro(
  $input: UpdatePomodoroInput!
  $condition: ModelPomodoroConditionInput
) {
  updatePomodoro(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
export const deletePomodoro = `mutation DeletePomodoro(
  $input: DeletePomodoroInput!
  $condition: ModelPomodoroConditionInput
) {
  deletePomodoro(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
