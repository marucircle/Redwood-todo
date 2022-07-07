import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user: { create: { name: 'String2761622', password: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user: { create: { name: 'String2862291', password: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
