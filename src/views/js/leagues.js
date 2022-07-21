async function uploadImageFile() {
  const image = document.getElementById('leagueImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewLeagueSubmit() {
  const leagueName = document.getElementById('leagueName').value;
  const imageUrl = await uploadImageFile();
  createNewLeague({ name: leagueName, image: imageUrl }).finally(() => {
    getListLeagueData();
  });
}

async function getListLeagueData() {
  const fetchedLeagues = await getAllLeagues();
  const listLeague = [...fetchedLeagues];
  listLeague.forEach((l, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each_data" >' + l.name + '</td>' +
      '<td class="each_data" >' + l.image + '</td>' +
      '<td class="each_data" >' + moment(l.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each_data" >' + moment(l.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data"> <button class="action__btn update__btn" onclick="openDialogUpdateInfo">u</button><button class="action__btn info__btn" onclick="openDialogWatchInfo">i</button></td>' +
      '</tr>'
  })
}

getListLeagueData();