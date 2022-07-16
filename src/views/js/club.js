async function uploadImageFile() {
  const image = document.getElementById('clubImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewClubSubmit() {
  const casterName = document.getElementById('clubName').value;
  const imageUrl = await uploadImageFile();
  createNewClub({ name: casterName, image: imageUrl }).finally(() => {
    getAllClubs();
  });
}
