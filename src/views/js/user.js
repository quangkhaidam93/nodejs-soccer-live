async function updateUserInfoSubmit() {
  try {
    const response = await client.post(`/user/${id}`, {
      fullName,
      avatar,
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}