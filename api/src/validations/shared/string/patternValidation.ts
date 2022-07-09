import { ValidationError } from '../error'

export const patternValidation = (
  value: string,
  field: string,
  pattern: RegExp,
  pattern_name: string
) => {
  if (!pattern.test(value)) {
    throw new ValidationError(
      `${field}フィールドは${pattern_name}の形式通りに入力してください`
    )
  }
}
