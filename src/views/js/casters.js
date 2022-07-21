async function uploadImageFile() {
  const image = document.getElementById('casterAvatarImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewCasterSubmit() {
  const casterName = document.getElementById('casterName').value;
  const imageUrl = await uploadImageFile();
  createNewCaster({ fullName: casterName, avatar: imageUrl }).finally(() => {
    getListCasterData();
  });
}

async function getListCasterData() {
  const fetchedCaster = await getAllCasters();
  const listCaster = [...fetchedCaster];
  listCaster.forEach((c, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each_data" >' + c.fullName + '</td>' +
      '<td class="each_data" >' + c.avatar + '</td>' +
      '<td class="each_data" >' + moment(c.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each_data" >' + moment(c.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data"> <button class="action__btn update__btn" onclick="openDialogUpdateInfo">u</button><button class="action__btn info__btn" onclick="openDialogWatchInfo">i</button></td>' +
      '</tr>'
  })
}

getListCasterData();