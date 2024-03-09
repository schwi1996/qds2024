import prisma from '.'
/**
 * Creates a new room in the database.
 * @param {Object} room - The room data to be stored.
 * @returns {Object} - An object containing the newly created room or an error object if the operation fails.
 */
export async function createRoom(room) {
  try {
    const roomFromDB = await prisma.room.create({ data: room });
    return { room: roomFromDB };
  } catch (error) {
    return { error };
  }
}

/**
 * Retrieves a room by its ID.
 * @param {string} roomId - The unique identifier of the room to be retrieved.
 * @returns {Object} - An object containing the requested room or an error object if the operation fails.
 */
export async function joinRoomById(roomId , userId) {  
  try {
    const user = await prisma.user.findUnique({
      where : { id : userId }
    })

    const getRoomAndSaveTheRoom = await prisma.room.findUnique({
      where : { id : roomId }
    })
    
    const roomMemberAlreadyJoined = getRoomAndSaveTheRoom.members.newRoomMembers

    var newRoomMembers = []

    if (roomMemberAlreadyJoined === null || roomMemberAlreadyJoined === undefined) {
      newRoomMembers = [user]
    }else{
      newRoomMembers = [...roomMemberAlreadyJoined, user]
    }

    

    const updateRoom = await prisma.room.update({
      where: { id: roomId },
      data: {
          members: {
            newRoomMembers
          }
        }
      })

    const updatedRoom = await prisma.room.findUnique({
      where : { id : roomId }
    })

    return { updatedRoom };
  } catch (error) {
    return { error };
  }
}

/**
 * Retrieves all rooms from the database.
 * @returns {Object} - An object containing an array of all rooms or an error object if the operation fails.
 */
export async function getRooms() {
  try {
    const rooms = await prisma.room.findMany();
    return { rooms };
  } catch (error) {
    return { error };
  }
}

/**
 * Fetches a random set of rooms from the database.
 * First, it retrieves all room IDs, then selects one at random to serve as a cursor.
 * Starting from the randomly selected room, it fetches a specified number of rooms.
 * @returns {Object} An object containing an array of random rooms or an error object if the operation fails.
 */
export async function getRandomRooms() {
  try {
    const entireIds = await prisma.room.findMany({
      select: {
        id: true,
      },
    });

    const index = Math.floor(Math.random() * entireIds.length);
    const randomRoomId = entireIds[index].id;

    const randomRooms = await prisma.room.findMany({
      take: 6,
      orderBy: [
        {
          id: "asc",
        },
      ],
      cursor: {
        id: randomRoomId,
      },
    });

    return { randomRooms };
  } catch (error) {
    return { error };
  }
}

/**
 * Deletes a room from the database.
 * @param {string} roomId - The unique identifier of the room to be deleted.
 * @returns {Object} - An object indicating the result of the operation or an error object if the operation fails.
 */
export async function deleteRoom(roomId) {
  try {
    await prisma.room.delete({
      where: { id: roomId },
    });
    return { message: "Room successfully deleted" };
  } catch (error) {
    return { error };
  }
}

/**
 * Increments the number of participants in a room.
 * @param {string} roomId - The unique identifier of the room.
 * @returns {Object} - An object containing the updated room or an error object if the operation fails.
 */
// export async function incrementParticipantCount(roomId) {
//     try {
//       const room = await prisma.room.update({
//         where: { id: roomId },
//         data: {
//           numberOfParticipants: {
//             increment: 1,
//           },
//         },
//       });
//       return { room };
//     } catch (error) {
//       return { error };
//     }
//   }

/**
 * Decrements the number of participants in a room.
 * @param {string} roomId - The unique identifier of the room.
 * @returns {Object} - An object containing the updated room or an error object if the operation fails.
 */
// export async function decrementParticipantCount(roomId) {
//     try {
//       const room = await prisma.room.update({
//         where: { id: roomId },
//         data: {
//           numberOfParticipants: {
//             decrement: 1,
//           },
//         },
//       });
//       return { room };
//     } catch (error) {
//       return { error };
//     }
//   }
