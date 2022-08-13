import { db } from 'src/lib/db'

export const hasTag = async (user_id: number, tag_id: number) => {
  const tags = await db.user
    .findUnique({ where: { id: user_id } })
    .tags({ where: { id: tag_id } })

  return tags.length === 0
}
