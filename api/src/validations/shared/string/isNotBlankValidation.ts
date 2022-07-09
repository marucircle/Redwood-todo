import { ValidationError } from '../error'

export const isNotBlankValidation = (value: string, field: string) => {
  if (value === '') {
    throw new ValidationError(
      `${field}フィールドに空文字のみを入力することはできません`
    )
  }
}
