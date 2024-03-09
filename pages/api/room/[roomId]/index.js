import { joinRoomById } from '@/lib/prisma/room'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { roomId } = req.query
      const userId  = req.body.userId
      
      const { updatedRoom, error } = await joinRoomById(roomId, userId)

      if (error) throw new Error(error)
      return res.status(200).json({ updatedRoom })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
