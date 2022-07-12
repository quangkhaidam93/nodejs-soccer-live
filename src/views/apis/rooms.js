async function getAllRooms(offset) {
  console.log('triggered');
  try {
    const response = await client.get("/rooms", { offset });

    const { arrayData, hasMore, offset: responseOffset } = responseHandler(response);
    console.log(arrayData, hasMore, responseOffset);
  } catch (err) {
    console.log('err', err);
  }
}

async function getRoomById(id) {
  try {
    const response = await client.get(`/room/${id}`);

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function createNewRoom({ name, casterId, club1Id, club2Id, leagueId }) {
  try {
    const response = await client.post("/room", {
      name,
      casterId,
      club1Id,
      club2Id,
      leagueId,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function updateRoom(id, { name, casterId, club1Id, club2Id, leagueId }) {
  try {
    const response = await client.post(`/room/${id}`, {
      name,
      casterId,
      club1Id,
      club2Id,
      leagueId,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function deleteRoom(id) {
  try {
    const response = await client.delete(`/room/${id}`);

    const { message } = responseHandler(response);
    console.log(message);
  } catch (err) {}
}

// getAllRooms();
// getRoomById(1);
// createNewRoom({ name: 'Room 7', casterId: 3, leagueId: 2, club1Id: 3, club2Id: 4 });
// updateRoom(7, { club1Id: 4 });
// deleteRoom(7);
