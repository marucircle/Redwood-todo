import { db } from 'src/lib/db'

export const hasTag = async (user_id: number, tag_id: number) => {
  const tags = await db.tag.findMany({
    where: { id: tag_id, user_id: user_id },
  })

  return tags.length === 0
}
