import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user: { create: { name: 'String2935158', password: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user: { create: { name: 'String5550014', password: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
