import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { name: 'String2433791', password: 'String' } },
    two: { data: { name: 'String5733864', password: 'String' } },
  },
})

export type StandardScenario = typeof standard
