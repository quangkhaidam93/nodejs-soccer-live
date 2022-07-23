async function getAllCasters() {
  try {
    const response = await client.get("/casters");

    const { arrayData } = responseHandler(response);
    return arrayData;
  } catch (err) {
    return err;
  }
}

async function getCasterById(id) {
  try {
    const response = await client.get(`/caster/${id}`);

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {
    return err;
  }
}

async function createNewCaster({ fullName, avatar }) {
  try {
    const response = await client.post("/caster", {
      fullName,
      avatar,
    });
    const { data } = responseHandler(response);
    return response;
  } catch (err) {
    return err;
  }
}

async function updateCaster(id, { fullName, avatar }) {
  try {
    const response = await client.post(`/caster/${id}`, {
      fullName,
      avatar,
    });

    const { data } = responseHandler(response);
    return response;
  } catch (err) {
    return err;
  }
}

async function deleteCaster(id) {
  try {
    const response = await client.delete(`/caster/${id}`);
    const { message } = responseHandler(response);
    return response.data;
  } catch (err) {
    return err;
  }
}

// getAllCasters();
// getCasterById(3);
// createNewCaster({ fullName: 'TSH', avatar: 'aaa.img' });
// updateCaster(4, { avatar: 'bbb.img' });
// deleteCaster(4);
