async function uploadImage(image) {
  try {
    const bodyFormData = new FormData();
    bodyFormData.append("image", image);
    const response = await client.post("/upload/image", {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { data } = responseHandler(response);
    console.log(data);
  } catch (err) {}
}

uploadImage();
