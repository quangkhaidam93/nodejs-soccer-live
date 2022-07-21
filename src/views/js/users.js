async function getListUserData() {
  const fetchedUsers = await getAllUsers();
  const listUser = [...fetchedUsers];
  // remove child element
  const tableBodyRemove = document.getElementById("table-body");
  var child = tableBodyRemove.lastElementChild; 
  while (child) {
      tableBodyRemove.removeChild(child);
      child = tableBodyRemove.lastElementChild;
  }
  // add list info 
  listUser.forEach((u, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each__data" >' + u.username + '</td>' +
      '<td class="each__data" >' + u.nickname + '</td>' +
      '<td class="each__data" >' + moment(u.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data" >' + moment(u.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data">' + 
        '<button class="action__btn update__btn" data-bs-toggle="modal" data-bs-target="#updateUserModal">u</button>' +
        '<button class="action__btn info__btn" data-bs-toggle="modal" data-bs-target="#infoUserModal">i</button>' +
        '<button class="action__btn delete__btn" data-bs-toggle="modal" data-bs-target="#deleteUserModal">d</button>' +
      '</td>' +
      '</tr>'
  })
}

getListUserData();

async function updateUserInfoSubmit() {

}

async function onDeleteUserConfirm() {

}