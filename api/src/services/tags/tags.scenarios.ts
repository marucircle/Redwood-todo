import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user_id: 1,
      },
    },
    two: {
      data: {
        name: 'String',
        bg_color: 'String',
        text_color: 'String',
        user_id: 1,
      },
    },
  },
})

export type StandardScenario = typeof standard
