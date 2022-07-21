async function getAllUsers() {
  try {
    const response = await client.get("/users");

    const { arrayData } = responseHandler(response);
    return arrayData;
  } catch (err) {}
}

async function getUserById(id) {
  try {
    const response = await client.get(`/user/${id}`);

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function createNewUser({ fullName, avatar }) {
  try {
    const response = await client.post("/user", {
      fullName,
      avatar,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function updateUser(id, { fullName, avatar }) {
  try {
    const response = await client.post(`/user/${id}`, {
      fullName,
      avatar,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

async function deleteUser(id) {
  try {
    const response = await client.delete(`/user/${id}`);

    const { message } = responseHandler(response);
    console.log(message);
  } catch (err) {}
}

// getAllUsers();
// getUserById(3);
// createNewUser({ fullName: 'TSH', avatar: 'aaa.img' });
// updateUser(4, { avatar: 'bbb.img' });
// deleteUser(4);
