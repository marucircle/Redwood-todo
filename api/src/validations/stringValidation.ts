import { ValidationError } from './shared/error'
import { isNotBlankValidation } from './shared/string/isNotBlankValidation'
import { maxLengthValidation } from './shared/string/maxLengthValidation'
import { isStringValidation } from './shared/typeValidation'

export const stringValidation = (
  value: unknown,
  field: string,
  length: number
): { ok: boolean; message?: string } => {
  try {
    if (isStringValidation(value, field)) {
      const trimed_value = value.trim()
      isNotBlankValidation(trimed_value, field)
      maxLengthValidation(trimed_value, field, length)
    }
  } catch (e: unknown) {
    if (e instanceof ValidationError) {
      return { ok: false, message: e.message }
    } else {
      return { ok: false, message: '未定義のエラーです' }
    }
  }

  return { ok: true }
}
