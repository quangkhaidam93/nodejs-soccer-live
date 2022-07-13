async function uploadImageFile() {
  const image = document.getElementById('casterAvatarImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewCasterSubmit() {
  const casterName = document.getElementById('casterName').value;
  const imageUrl = await uploadImageFile(casterAvatarImage);
  createNewCaster({ fullName: casterName, avatar: imageUrl });
}