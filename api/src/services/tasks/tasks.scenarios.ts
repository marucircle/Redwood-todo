import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        name: 'String',
        detail: 'String',
        priority: 4783626,
        is_checked: true,
        is_archived: true,
        user_id: 1,
      },
    },
    two: {
      data: {
        name: 'String',
        detail: 'String',
        priority: 1467779,
        is_checked: true,
        is_archived: true,
        user_id: 1,
      },
    },
  },
})

export type StandardScenario = typeof standard
