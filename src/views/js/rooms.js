async function createNewRoomSubmit() {
  const roomName = document.getElementById('roomName').value;
  const roomLinkURL = document.getElementById('roomLinkURL').value;
  const casterName = document.getElementById('casterName').value;
  const leagueName = document.getElementById('leagueName').value;
  const clubName_1 = document.getElementById('clubName_1').value;
  const clubName_2 = document.getElementById('clubName_2').value;
  createNewRoom({ 
    name: roomName, 
    streamUrl: roomLinkURL,
    casterId: casterName,
    leagueId: leagueName,
    club1Id: clubName_1,
    club2Id: clubName_2
  }).finally(() => {
    getAllRooms();
  });
}

async function getListRoomData() {
  const fetchedRooms = await getAllRooms();
  console.log('ccc', fetchedRooms);
  const listRoom = [...fetchedRooms];
  listRoom.forEach((r, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += '<tr class="table__row" ><th class="each__data" scope="row" >' + (idx + 1) + '</th>' +
      '<td class="each_data" >' + r.name + '</td>' +
      '<td class="each_data" >' + r.streamUrl + '</td>' +
      '<td class="each_data" >' + r.caster.name + '</td>' +
      '<td class="each_data" >' + r.club1.name + '</td>' +
      '<td class="each_data" >' + r.club2.name + '</td>' +
      '<td class="each_data" >' + r.league.name + '</td>' +
      '<td class="each_data" >' + moment(r.createdAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each_data" >' + moment(r.updatedAt).format('DD/MM/YYYY') + '</td>' +
      '<td class="each__data"> <button class="action__btn update__btn" onclick="openDialogUpdateInfo">u</button><button class="action__btn info__btn" onclick="openDialogWatchInfo">i</button></td>' +
      '</tr>'
  })
}

getListRoomData();
