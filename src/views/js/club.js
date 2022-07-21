async function uploadImageFile() {
  const image = document.getElementById('clubImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewClubSubmit() {
  const clubName = document.getElementById('clubName').value;
  const imageUrl = await uploadImageFile();
  createNewClub({ name: clubName, image: imageUrl }).finally(() => {
    getListClubData();
  });
}

async function getListClubData() {
  const fetchedClubs = await getAllClubs();
  const listClub = [...fetchedClubs];
  // remove child element
  const tableBodyRemove = document.getElementById("table-body");
  var child = tableBodyRemove.lastElementChild; 
  while (child) {
      tableBodyRemove.removeChild(child);
      child = tableBodyRemove.lastElementChild;
  }
  // add list info 
  listClub.forEach((c, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each_data" >' + c.name + '</td>' +
      '<td class="each_data" >' + c.image + '</td>' +
      '<td class="each_data" >' + moment(c.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each_data" >' + moment(c.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data">' + 
        '<button class="action__btn update__btn" data-bs-toggle="modal" data-bs-target="#updateClubModal">u</button>' +
        '<button class="action__btn info__btn" data-bs-toggle="modal" data-bs-target="#infoClubModal">i</button>' +
        '<button class="action__btn delete__btn" data-bs-toggle="modal" data-bs-target="#deleteClubModal">d</button>' +
      '</td>' +
      '</tr>'
  })
}

async function updateClubSubmit() {

}

async function onDeleteClubConfirm() {

}

getListClubData();
