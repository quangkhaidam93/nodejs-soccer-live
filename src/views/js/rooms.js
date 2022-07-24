let listCaster = [];
let listLeague = [];
let listClub = [];
let listRoom = [];
let selectedRoom;

// get list data when load page
async function getListClubs() {
  const resListClub = await getAllClubs();
  listClub = [...resListClub];
  if(listClub.length > 0) {
    listClub.forEach((club, clubIdx) => {
      $('#clubName_1').append($('<option>', {
        value: club.id,
        text: club.name
      }));
      $('#clubName_2').append($('<option>', {
        value: club.id,
        text: club.name
      }));
      $('#updateClubName_1').append($('<option>', {
        value: club.id,
        text: club.name
      }));
      $('#updateClubName_2').append($('<option>', {
        value: club.id,
        text: club.name
      }));
      $('#infoClubName_1').append($('<option>', {
        value: club.id,
        text: club.name
      }));
      $('#infoClubName_2').append($('<option>', {
        value: club.id,
        text: club.name
      }));
    })
  }
}

async function getListLeagues() {
  const resListLeague = await getAllLeagues();
  listLeague = [...resListLeague];
  if(listLeague.length > 0) {
    listLeague.forEach((league, leagueIdx) => {
      $('#leagueName').append($('<option>', {
        value: league.id,
        text: league.name
      }));
      $('#updateLeagueName').append($('<option>', {
        value: league.id,
        text: league.name
      }));
      $('#infoLeagueName').append($('<option>', {
        value: league.id,
        text: league.name
      }));
    })
  }
}

async function getListCasters() {
  const resListCaster = await getAllCasters();
  listCaster = [...resListCaster];
  if(listCaster.length > 0) {
    listCaster.forEach((caster, casterIdx) => {
      $('#casterName').append($('<option>', {
        value: caster.id,
        text: caster.fullName
      }));
      $('#updateCasterName').append($('<option>', {
        value: caster.id,
        text: caster.fullName
      }));
      $('#infoCasterName').append($('<option>', {
        value: caster.id,
        text: caster.fullName
      }));
    })
  }
}

async function getListRoomData() {
  const fetchedRooms = await getAllRooms();
  const listRoom = [...fetchedRooms];
  // remove child element
  const tableBodyRemove = document.getElementById("table-body");
  var child = tableBodyRemove.lastElementChild; 
  while (child) {
      tableBodyRemove.removeChild(child);
      child = tableBodyRemove.lastElementChild;
  }
  // add list info 
  listRoom.forEach((r, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += `
    <tr class="table__row" >
      <th class="each__data" scope="row"> ${(idx + 1)} </th>
      <td class="each_data"> ${r.name} </td>
      <td class="each_data"> ${r.streamUrl} </td>
      <td class="each_data"> ${r.caster.name} </td>
      <td class="each_data"> ${r.league.name} </td>
      <td class="each_data"> ${r.club1.name} </td>
      <td class="each_data"> ${r.club2.name} </td>
      <td class="each_data"> ${moment(r.createdAt).format('DD/MM/YYYY')} </td>
      <td class="each_data"> ${moment(r.updatedAt).format('DD/MM/YYYY')} </td>
      <td class="each__data">
        <button 
          class="action__btn update__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#updateRoomModal"
          onclick="selectRoom(${r.id}, 'update')"
        >
          u
        </button>
        <button 
          class="action__btn info__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#infoRoomModal"
          onclick="selectRoom(${r.id}, 'info')"
        >
          i
        </button>
        <button 
          class="action__btn delete__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#deleteRoomModal"
          onclick="selectRoom(${r.id}, 'delete')"
        >
          d
        </button>
      </td>
    </tr>`
  })
}

getListClubs();
getListLeagues();
getListCasters();
getListRoomData();

// select room
function selectRoom(roomId, type) {
  const dataSelectedRoom = selectedRoom.find(room => room.id === roomId);
  selectedRoom = dataSelectedRoom;
  switch(type) {
    case 'update': {
      let updateRoomName = document.getElementById('updateRoomName');
      let updateRoomLinkURL = document.getElementById('updateRoomLinkURL');
      let updateCasterName = document.getElementById('updateCasterName');
      let updateLagueName = document.getElementById('updateLagueName');
      let updateClubName_1 = document.getElementById('updateClubName_1');
      let updateClubName_2 = document.getElementById('updateClubName_2');
      updateRoomName.value = selectedRoom.name;
      updateRoomLinkURL.value = selectedRoom.streamUrl;
      updateCasterName.value = selectedRoom.caster.id;
      updateLagueName.value = selectedRoom.league.id;
      updateClubName_1.value = selectedRoom.club1.id;
      updateClubName_2.value = selectedRoom.club2.id;
      break;
    }
    case 'info': {
      let updateRoomName = document.getElementById('infoRoomName');
      let updateRoomLinkURL = document.getElementById('infoRoomLinkURL');
      let updateCasterName = document.getElementById('infoCasterName');
      let updateLagueName = document.getElementById('infoLagueName');
      let updateClubName_1 = document.getElementById('infoClubName_1');
      let updateClubName_2 = document.getElementById('infoClubName_2');
      updateRoomName.value = selectedRoom.name;
      updateRoomLinkURL.value = selectedRoom.streamUrl;
      updateCasterName.value = selectedRoom.caster.id;
      updateLagueName.value = selectedRoom.league.id;
      updateClubName_1.value = selectedRoom.club1.id;
      updateClubName_2.value = selectedRoom.club2.id;
      break;
    }
    case 'delete': {
      let deleteText = document.getElementById('deleteBodyText');
      var child = deleteText.lastElementChild; 
      while (child) {
        deleteText.removeChild(child);
        child = deleteText.lastElementChild;
      }
      deleteText.innerHTML += `
      <div>
        Bạn có chắc chắn xóa phòng
        <span style="color: red; font-weight: bold"> ${selectedRoom.name} </span>
        này không ?
      </div>`
      break;
    }
  }
}

// CRUD function
async function createNewRoomSubmit() {
  createNewRoom({ 
    name: $('#roomName').val(),
    streamUrl: $('#roomLinkURL').val(),
    casterId: $('#casterName').val(),
    leagueId: $('#leagueName').val(),
    club1Id: $('#clubName_1').val(),
    club2Id: $('#clubName_2').val()
  })
  .then(res => {
    if (res.data.statusCode === 200) {
      alert('Tạo phòng thành công');
    }
  })
  .catch(err => {
    alert('Tạo phòng thất bại, vui lòng thử lại.')
  })
  .finally(() => {
    $('#roomName').val('');
    $('#roomLinkURL').val('');
    $('#casterName').val('');
    $('#leagueName').val('');
    $('#clubName_1').val('');
    $('#clubName_2').val('');
    $('#addRoomModal').modal('hide');
    getListRoomData();
  });
}

async function updateRoomSubmit() {
  updateRoom({ 
    name: $('#updateRoomName').val(), 
    streamUrl: $('#updateRoomLinkURL').val(),
    casterId: $('#updateCasterName').val(),
    leagueId: $('#updateLeagueName').val(),
    club1Id: $('#updateClubName_1').val(),
    club2Id: $('#updateClubName_2').val()
  })
  .then(res => {
    if (res.data.statusCode === 200) {
      alert('Cập nhật phòng thành công');
    }
  })
  .catch(err => {
    alert('Cập nhật phòng thất bại, vui lòng thử lại.')
  })
  .finally(() => {
    $('#updateRoomModal').modal('hide');
    getListRoomData();
  });
}

async function onDeleteRoomConfirm() {
  try {
    await deleteRoom(selectedRoom.id)
    .then(res => {
      if (res.data.statusCode === 200) {
        alert('Xóa phòng thành công')
      }
    })
    .catch(err => {
      alert('Xóa phòng bị lỗi, vui lòng thử lại')
    })
    .finally(() => {
      $('#deleteRoomModal').modal('hide');
      getListRoomData();
    });
  } catch (err) {
    console.log(err);
  }
}