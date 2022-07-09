export const organizeErrorMessage = (messages: string[]) => {
  const organized_message = new Set()
  messages.map((message) => {
    organized_message.add(message)
  })
  return messages
}
