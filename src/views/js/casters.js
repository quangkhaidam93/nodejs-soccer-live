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
  // remove child element
  const tableBodyRemove = document.getElementById("table-body");
  var child = tableBodyRemove.lastElementChild; 
  while (child) {
      tableBodyRemove.removeChild(child);
      child = tableBodyRemove.lastElementChild;
  }
  // add list info 
  listCaster.forEach((c, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr id="table__row" class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each__data" >' + c.fullName + '</td>' +
      '<td class="each__data" >' + c.avatar + '</td>' +
      '<td class="each__data" >' + moment(c.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data" >' + moment(c.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data">' + 
        '<button class="action__btn update__btn" data-bs-toggle="modal" data-bs-target="#updateCasterModal">u</button>' +
        '<button class="action__btn info__btn" data-bs-toggle="modal" data-bs-target="#infoCasterModal">i</button>' +
        '<button class="action__btn delete__btn" data-bs-toggle="modal" data-bs-target="#deleteUserModal">d</button>' +
      '</td>' +
      '</tr>'
  })
}

getListCasterData();