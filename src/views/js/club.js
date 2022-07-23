let listClub = [];
let selectedClub;

async function uploadImageFile() {
  const image = document.getElementById('clubImage').files[0];

  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewClubSubmit() {
  const clubName = document.getElementById('clubName').value;
  const imageUrl = await uploadImageFile();
  createNewClub({ name: clubName, image: imageUrl })
  .then(res=> {
    if (res.data.statusCode === 200) {
      alert('Tạo club thành công');
    }
  })
  .catch(err => {
    alert('Tạo club thất bại, vui lòng thử lại.')
  })
  .finally(() => {
    let clubName = document.getElementById('clubName');
    clubName.value = '';
    $('#addClubModal').modal('hide');
    getListClubData();
  });
}

async function getListClubData() {
  const fetchedClubs = await getAllClubs();
  listClub = [...fetchedClubs];
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
    tableBody.innerHTML += `
    <tr class="table__row" >
      <th class="each__data" scope="row" > ${idx + 1} </th>
      <td class="each_data" > ${c.name} </td>
      <td class="each_data" > 
        <img class="data__image" src=${c.image}/>
      </td>
      <td class="each_data" > ${moment(c.createdAt).format('DD/MM/YYYY')} </td>
      <td class="each_data" > ${moment(c.updatedAt).format('DD/MM/YYYY')} </td>
      <td class="each__data"> 
        <button 
          class="action__btn update__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#updateClubModal"
          onclick="selectCaster(${c.id}, 'update')"
        >
          u
        </button>
        <button 
          class="action__btn info__btn"
          data-bs-toggle="modal"
          data-bs-target="#infoClubModal"
          onclick="selectCaster(${c.id}, 'info')"
        >
          i
        </button>
        <button 
          class="action__btn delete__btn" 
          data-bs-toggle="modal" 
          data-bs-target="#deleteClubModal"
          onclick="selectCaster(${c.id}, 'delete')"
        >
          d
        </button>
      </td>
    </tr>`
  })
}


// select caster
function selectCaster(clubId, type) {
  const dataSelectedClub = listClub.find(c => c.id === clubId);
  selectedClub = dataSelectedClub;
  switch(type) {
    case 'update': {
      let clubName = document.getElementById('updateClubName');
      clubName.value = selectedClub.name;
      break;
    }
    case 'info': {
      let clubName = document.getElementById('infoClubName');
      clubName.value = selectedClub.name;
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
        Bạn có chắc chắn xóa CLB
        <span style="color: red; font-weight: bold"> ${selectedClub.name} </span>
        này không ?
      </div>`
      break;
    }
  }
}

async function updateClubSubmit() {
  const clubName = document.getElementById('updateClubName').value;
  const image = document.getElementById('updateClubImage').files[0];
  let imageUrl = selectedClub.image;
  if (image) imageUrl = await uploadImageFile(image);
  updateClub(selectedClub.id, { name: clubName, image: imageUrl })
  .then(res => {
    if (res.data.statusCode === 200) {
      alert('Cập nhật club thành công');
    }
  })
  .catch(err => {
    alert('Cập nhật club thất bại, vui lòng thử lại');
  })
  .finally(() => {
    $('#updateClubModal').modal('hide');
    getListClubData();
  });
}

async function onDeleteClubConfirm() {
  try {
    await deleteClub(selectedClub.id)
    .then(res => {
      if (res.data.statusCode === 200) {
        alert('Xóa CLB thành công')
      }
    })
    .catch(err => {
      alert('Xóa CLB bị lỗi, vui lòng thử lại')
    })
    .finally(() => {
      $('#deleteClubModal').modal('hide');
      getListClubData();
    });
  } catch (err) {
    console.log(err);
  }
}

getListClubData();
