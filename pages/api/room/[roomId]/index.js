import { joinRoomById, deleteRoom } from '@/lib/prisma/room'

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

  if (req.method === 'DELETE') {
    try {
      const { roomId } = req.query
      const { room, error } = await deleteRoom(roomId)

      if (error) throw new Error(error)
      return res.status(200).json({ room })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['POST', 'DELETE'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
