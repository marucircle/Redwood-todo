import { ValidationError } from './error'

export const isStringValidation = (
  value: unknown,
  field: string
): value is string => {
  if (value instanceof String || typeof value === 'string') {
    throw new ValidationError(`${field}フィールドには文字列を入力してください`)
  } else {
    return true
  }
}
