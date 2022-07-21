async function getListUserData() {
  const fetchedUsers = await getAllUsers();
  const listUser = [...fetchedUsers];
  listUser.forEach((u, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each_data" >' + u.username + '</td>' +
      '<td class="each_data" >' + u.nickname + '</td>' +
      '<td class="each_data" >' + moment(u.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each_data" >' + moment(u.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data"> <button class="action__btn update__btn" onclick="openDialogUpdateInfo">u</button><button class="action__btn info__btn" onclick="openDialogWatchInfo">i</button></td>' +
      '</tr>'
  })
}

getListUserData();