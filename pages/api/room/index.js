import { createRoom, searchRoomsByTitle } from "@/lib/prisma/room";

const handler = async (req, res) => {
  // if (req.method === 'GET') {
  //   try {
  //     const { room, error } = await getRooms()
  //     if (error) throw new Error(error)
  //     return res.status(200).json({ room  })
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message })
  //   }
  // }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { room, error } = await createRoom(data);
      if (error) throw new Error(error);
      return res.status(200).json({ room });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const { title } = req.query;
      const { rooms, error } = await searchRoomsByTitle(title);

      console.log("rooms", rooms);
      
      if (error) throw new Error(error);
      return res.status(200).json({ rooms });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
