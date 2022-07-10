import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { name: 'String8407050', password: 'String', salt: 'String' },
    },
    two: {
      data: { name: 'String4263850', password: 'String', salt: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
