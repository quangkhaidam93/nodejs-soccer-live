async function getAllClubs() {
  try {
    const response = await client.get("/clubs");

    const { arrayData } = responseHandler(response);
    console.log(arrayData);
  } catch (err) {}
}

async function getClubById(id) {
  try {
    const response = await client.get(`/club/${id}`);

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function createNewClub({ name, image }) {
  try {
    const response = await client.post("/club", {
      name,
      image,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function updateClub(id, { name, image }) {
  try {
    const response = await client.post(`/club/${id}`, {
      name,
      image
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function deleteClub(id) {
  try {
    const response = await client.delete(`/club/${id}`);

    const { message } = responseHandler(response);
    console.log(message);
  } catch (err) {}
}

// getAllClubs();
// getClubById(3);
// createNewClub({name: 'Chè Xanh', image: 'Hehe'});
// updateClub(3, { image: 'haha.img' });
// deleteClub(5);
