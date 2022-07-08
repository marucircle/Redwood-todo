import { ValidationError } from './shared/error'
import { isNotBlankValidation } from './shared/string/isNotBlankValidation'
import { maxLengthValidation } from './shared/string/maxLengthValidation'
import { patternValidation } from './shared/string/patternValidation'
import { isStringValidation } from './shared/typeValidation'

export const colorCodeValidation = (
  value: unknown,
  field: string,
  length: number
): { ok: boolean; message?: string } => {
  try {
    if (
      isStringValidation(
        value,
        `${field}フィールドには文字列を入力してください`
      )
    ) {
      const trimed_value = value.trim()
      isNotBlankValidation(trimed_value, field)
      maxLengthValidation(trimed_value, field, length)
      patternValidation(trimed_value, field, /#[0-9a-fA-f]*/, 'カラーコード')
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
