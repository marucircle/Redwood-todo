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
      },
    },
    two: {
      data: {
        name: 'String',
        detail: 'String',
        priority: 1467779,
        is_checked: true,
        is_archived: true,
      },
    },
  },
})

export type StandardScenario = typeof standard
