async function uploadImageFile() {
  const image = document.getElementById('leagueImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewLeagueSubmit() {
  const casterName = document.getElementById('leagueName').value;
  const imageUrl = await uploadImageFile();
  createNewLeague({ name: casterName, image: imageUrl }).finally(() => {
    getAllLeagues();
  });
}
