import type {
  QueryResolvers,
  MutationResolvers,
  TagResolvers,
} from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { organizeErrorMessage } from 'src/utils/organizeErrorMessage'
import { colorCodeValidation } from 'src/validations/colorCodeValidation'
import { stringValidation } from 'src/validations/stringValidation'

import { hasTag } from './tags.validation'

export const tags: QueryResolvers['tags'] = () => {
  return db.tag.findMany({
    where: {
      user_id: context.currentUser.id,
    },
    include: {
      tasks: true,
    },
  })
}

export const tag: QueryResolvers['tag'] = ({ id }) => {
  return db.tag.findUnique({
    where: { id },
    include: {
      tasks: true,
    },
  })
}

export const createTag: MutationResolvers['createTag'] = ({ input }) => {
  validateWith(() => {
    let ok = true
    const messages = []

    let validate_result = stringValidation(input.name, 'name', 100)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = colorCodeValidation(input.text_color, 'text_color', 8)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = colorCodeValidation(input.bg_color, 'bg_color', 8)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    if (!ok) {
      throw organizeErrorMessage(messages)
    }
  })
  return db.tag.create({
    data: input,
  })
}

export const updateTag: MutationResolvers['updateTag'] = ({ id, input }) => {
  validateWith(() => {
    let ok = true
    const messages = []

    if (!hasTag(context.currentUser.id, id))
      throw organizeErrorMessage(['更新権限のないタグです'])

    let validate_result = stringValidation(input.name, 'name', 100)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = colorCodeValidation(input.text_color, 'text_color', 8)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = colorCodeValidation(input.bg_color, 'bg_color', 8)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    if (!ok) {
      throw organizeErrorMessage(messages)
    }
  })
  return db.tag.update({
    data: input,
    where: { id },
  })
}

export const deleteTag: MutationResolvers['deleteTag'] = ({ id }) => {
  if (!hasTag(context.currentUser.id, id))
    throw organizeErrorMessage(['削除権限のないタグです'])
  return db.tag.delete({
    where: { id },
  })
}

export const Tag: TagResolvers = {
  user: (_obj, { root }) =>
    db.tag.findUnique({ where: { id: root.id } }).user(),
}
