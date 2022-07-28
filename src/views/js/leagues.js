let listLeague = [];
let selectedLeague;

async function uploadImageFile() {
  const image = document.getElementById('leagueImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function getListLeagueData() {
  const fetchedLeagues = await getAllLeagues();
  listLeague = [...fetchedLeagues];
  // remove child element
  const tableBodyRemove = document.getElementById("table-body");
  var child = tableBodyRemove.lastElementChild; 
  while (child) {
      tableBodyRemove.removeChild(child);
      child = tableBodyRemove.lastElementChild;
  }
  // add list info 
  listLeague.forEach((l, idx) => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML += `
    <tr class="table__row">
      <th class="each__data" scope="row" > ${(idx + 1)}</th>
      <td class="each_data"> ${l.name} </td>
      <td class="each_data"> 
        <img class="data__image" src=${l.image} > 
      </td>
      <td class="each_data"> ${moment(l.createdAt).format('DD/MM/YYYY')} </td>
      <td class="each_data"> ${moment(l.updatedAt).format('DD/MM/YYYY')} </td>
      <td class="each__data">
        <button 
          class="action__btn update__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#updateLeagueModal"
          onclick="selectLeague(${l.id}, 'update')">
          u
        </button>
        <button 
          class="action__btn info__btn" 
          data-bs-toggle="modal"
          data-bs-target="#infoLeagueModal"
          onclick="selectLeague(${l.id}, 'info')">
          i
        </button>
        <button 
          class="action__btn delete__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#deleteLeagueModal"
          onclick="selectLeague(${l.id}, 'delete')">
          d
        </button>
      </td>
    </tr>`
  })
}

// select caster
function selectLeague(leagueId, type) {
  const dataSelectedLeague = listLeague.find(l => l.id === leagueId);
  selectedLeague = dataSelectedLeague;
  switch(type) {
    case 'update': {
      let clubName = document.getElementById('updateLeagueName');
      clubName.value = selectedLeague.name;
      break;
    }
    case 'info': {
      let clubName = document.getElementById('infoLeagueName');
      clubName.value = selectedLeague.name;
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
        Bạn có chắc chắn xóa giải đấu
        <span style="color: red; font-weight: bold"> ${selectedLeague.name} </span>
        này không ?
      </div>`
      break;
    }
  }
}

async function createNewLeagueSubmit() {
  const leagueName = document.getElementById('leagueName').value;
  const imageUrl = await uploadImageFile();
  createNewLeague({ name: leagueName, image: imageUrl })
  .then(res=> {
    if (res.data.statusCode === 200) {
      alert('Tạo giải đấu thành công');
    }
  })
  .catch(err => {
    alert('Tạo giải đấu thất bại, vui lòng thử lại.')
  })
  .finally(() => {
    let leagueName = document.getElementById('leagueName');
    leagueName.value = '';
    $('#addLeagueModal').modal('hide');
    getListLeagueData();
  });
}

async function updateLeagueSubmit() {
  const clubName = document.getElementById('updateLeagueName').value;
  const image = document.getElementById('updateLeagueImage').files[0];
  let imageUrl = selectedLeague.image;
  if (image) imageUrl = await uploadImageFile(image);
  updateLeague(selectedLeague.id, { name: clubName, image: imageUrl })
  .then(res => {
    if (res.data.statusCode === 200) {
      alert('Cập nhật giải đấu thành công');
    }
  })
  .catch(err => {
    alert('Cập nhật giải đấu thất bại, vui lòng thử lại');
  })
  .finally(() => {
    $('#updateLeagueModal').modal('hide');
    getListLeagueData();
  });
}

async function onDeleteLeagueConfirm() {
  try {
    await deleteLeague(selectedLeague.id)
    .then(res => {
      if (res.data.statusCode === 200) {
        alert('Xóa giải đấu thành công')
      }
    })
    .catch(err => {
      alert('Xóa giải đấu bị lỗi, vui lòng thử lại')
    })
    .finally(() => {
      $('#deleteLeagueModal').modal('hide');
      getListLeagueData();
    });
  } catch (err) {
    console.log(err);
  }
}

getListLeagueData();
