import type {
  QueryResolvers,
  MutationResolvers,
  TaskResolvers,
} from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { organizeErrorMessage } from 'src/utils/organizeErrorMessage'
import { stringValidation } from 'src/validations/stringValidation'

import { hasTask } from './tasks.validation'

export const tasks: QueryResolvers['tasks'] = async ({ mode, tag }) => {
  const modeFilter = {
    is_checked: mode === 'completed' ? true : undefined,
    is_archived: mode === 'archived' ? true : undefined,
  }
  const tagFilter =
    tag !== undefined
      ? await db.tag.findFirst({
          where: { name: tag },
          select: { id: true },
        })
      : undefined

  return db.user.findUnique({ where: { id: context.currentUser.id } }).tasks({
    where: {
      ...modeFilter,
      tags: tagFilter
        ? {
            some: {
              id: tagFilter.id,
            },
          }
        : {},
    },
    include: {
      tags: true,
    },
  })
}

export const task: QueryResolvers['task'] = ({ id }) => {
  if (!hasTask(context.currentUser.id, id))
    throw organizeErrorMessage(['参照権限のないタスクです'])
  return db.task.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  })
}

export const createTask: MutationResolvers['createTask'] = ({ input }) => {
  validateWith(() => {
    let ok = true
    const messages = []
    let validate_result = stringValidation(input.name, 'name', 100)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = stringValidation(input.detail, 'detail', 99999999)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    if (!ok) {
      throw organizeErrorMessage(messages)
    }
  })
  return db.task.create({
    data: {
      ...input,
      is_checked: false,
      is_archived: false,
      tags: {
        connect: input.tags.map((tag_id) => {
          return { id: tag_id }
        }),
      },
      user_id: context.currentUser.id,
    },
    include: {
      tags: true,
    },
  })
}

export const updateTask: MutationResolvers['updateTask'] = ({ id, input }) => {
  validateWith(() => {
    let ok = true
    const messages = []

    if (!hasTask(context.currentUser.id, id))
      throw organizeErrorMessage(['更新権限のないタスクです'])

    let validate_result = stringValidation(input.name, 'name', 100)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    validate_result = stringValidation(input.detail, 'detail', 99999999)
    if (!validate_result.ok) {
      ok = false
      messages.push(validate_result.message)
    }
    if (!ok) {
      throw organizeErrorMessage(messages)
    }
  })
  return db.task.update({
    data: {
      ...input,
      tags: {
        set: [],
        connect: input.tags?.map((tag_id) => {
          return { id: tag_id }
        }),
      },
    },
    where: { id },
    include: {
      tags: true,
    },
  })
}

export const updateCheckTask: MutationResolvers['updateCheckTask'] = async ({
  id,
}) => {
  const previous = await db.task.findFirst({
    where: { id, user_id: context.currentUser.id },
  })
  validateWith(() => {
    if (!previous) throw organizeErrorMessage(['更新権限のないタスクです'])
  })
  return await db.task.update({
    data: { is_checked: !previous.is_checked },
    where: { id },
    include: {
      tags: true,
    },
  })
}

export const updateArchiveTask: MutationResolvers['updateArchiveTask'] =
  async ({ id }) => {
    const previous = await db.task.findFirst({
      where: { id, user_id: context.currentUser.id },
    })
    validateWith(() => {
      if (!previous) throw organizeErrorMessage(['更新権限のないタスクです'])
    })
    return await db.task.update({
      data: { is_archived: !previous.is_archived },
      where: { id },
      include: {
        tags: true,
      },
    })
  }

export const deleteTask: MutationResolvers['deleteTask'] = ({ id }) => {
  validateWith(() => {
    if (!hasTask(context.currentUser.id, id))
      throw organizeErrorMessage(['削除権限のないタスクです'])
  })
  return db.task.delete({
    where: { id },
  })
}

export const Task: TaskResolvers = {
  tags: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).tags(),
}
