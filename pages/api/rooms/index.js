import { getRooms } from "@/lib/prisma/room";

/**
 * Handles GET requests to fetch all rooms. Returns the rooms if successful or an error if not.
 * For non-GET requests, it indicates that only GET is allowed.
 *
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The outgoing response object.
 */
const handler = async (req, res) => {
  if (req.method === "GET") {
    const result = await getRooms();
    console.log("result", result);
    
    if (result.error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.status(200).json({ rooms: result.rooms });
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default handler;