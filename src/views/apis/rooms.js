async function getAllRooms(offset) {
  try {
    const response = await client.get("/rooms", { offset });

    const { arrayData, hasMore, offset: responseOffset } = responseHandler(response);
    return arrayData;
    // console.log(arrayData, hasMore, responseOffset);
  } catch (err) {
    console.log('err', err);
  }
}

async function getRoomById(id) {
  try {
    const response = await client.get(`/room/${id}`);
    const { data } = responseHandler(response);
    return response;
  } catch (err) {
    return err
  }
}

async function createNewRoom({ name, streamUrl, casterId, leagueId, club1Id, club2Id }) {
  try {
    const response = await client.post("/room", {
      name,
      streamUrl,
      casterId,
      leagueId,
      club1Id,
      club2Id,
    });

    const { data } = responseHandler(response);
    return response;
  } catch (err) {
    return err
  }
}

async function updateRoom(id, { name, streamUrl, leagueId, casterId, club1Id, club2Id }) {
  try {
    const response = await client.post(`/room/${id}`, {
      name,
      streamUrl,
      casterId,
      leagueId,
      club1Id,
      club2Id,
    });
    const { data } = responseHandler(response);
    return response
  } catch (err) {
    return err
  }
}

async function deleteRoom(id) {
  try {
    const response = await client.delete(`/room/${id}`);
    const { message } = responseHandler(response);
    return response    
  } catch (err) {
    return err
  }
}

// getAllRooms();
// getRoomById(1);
// createNewRoom({ name: 'Room 7', casterId: 3, leagueId: 2, club1Id: 3, club2Id: 4 });
// updateRoom(7, { club1Id: 4 });
// deleteRoom(7);
