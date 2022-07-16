async function uploadImageFile() {
  const image = document.getElementById('clubImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewClubSubmit() {
  const clubName = document.getElementById('clubName').value;
  const imageUrl = await uploadImageFile();
  createNewClub({ name: clubName, image: imageUrl }).finally(() => {
    getAllClubs();
  });
}
