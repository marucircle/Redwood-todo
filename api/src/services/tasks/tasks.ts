import type {
  QueryResolvers,
  MutationResolvers,
  TaskResolvers,
} from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { organizeErrorMessage } from 'src/utils/organizeErrorMessage'
import { stringValidation } from 'src/validations/stringValidation'

export const tasks: QueryResolvers['tasks'] = () => {
  return db.task.findMany({
    include: {
      tags: true,
    },
  })
}

export const task: QueryResolvers['task'] = ({ id }) => {
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
    },
  })
}

export const updateTask: MutationResolvers['updateTask'] = ({ id, input }) => {
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
  })
}

export const updateCheckTask: MutationResolvers['updateCheckTask'] = async ({
  id,
}) => {
  const previous = await db.task.findUnique({ where: { id } })
  return await db.task.update({
    data: { is_checked: !previous.is_checked },
    where: { id },
  })
}

export const updateArchiveTask: MutationResolvers['updateArchiveTask'] =
  async ({ id }) => {
    const previous = await db.task.findUnique({ where: { id } })
    return await db.task.update({
      data: { is_archived: !previous.is_archived },
      where: { id },
    })
  }

export const deleteTask: MutationResolvers['deleteTask'] = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task: TaskResolvers = {
  tags: (_obj, { root }) =>
    db.task.findUnique({ where: { id: root.id } }).tags(),
}
