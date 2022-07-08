import { ValidationError } from '../error'

export const maxLengthValidation = (
  value: string,
  field: string,
  length: number
) => {
  if (value.length < length) {
    throw new ValidationError(
      `${field}フィールドに${length}文字以上は文字列を入力できません`
    )
  }
}
