async function getAllLeagues() {
  try {
    const response = await client.get("/leagues");

    const { arrayData } = responseHandler(response);
    console.log(arrayData);
  } catch (err) {}
}

async function getLeagueById(id) {
  try {
    const response = await client.get(`/league/${id}`);

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function createNewLeague({ name, image }) {
  try {
    const response = await client.post("/league", {
      name,
      image,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function updateLeague(id, { name, image }) {
  try {
    const response = await client.post(`/league/${id}`, {
      name,
      image
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function deleteLeague(id) {
  try {
    const response = await client.delete(`/league/${id}`);

    const { message } = responseHandler(response);
    console.log(message);
  } catch (err) {}
}

// getAllLeagues();
// getLeagueById(2);
// createNewLeague({ name: 'EPL', image: 'haha.img' });
// updateLeague(3, { name: 'Bundesliga' });
// deleteLeague(3);
