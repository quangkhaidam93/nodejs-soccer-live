let listCaster = [];
let selectedCaster;

async function uploadImageFile(image) {
  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewCasterSubmit() {
  const casterName = document.getElementById('casterName').value;
  const image = document.getElementById('casterAvatarImage').files[0];
  let imageUrl;
  if (image) imageUrl = await uploadImageFile(image);
  createNewCaster({ fullName: casterName, avatar: imageUrl })
  .then(res=> {
    if (res.data.statusCode === 200) {
      alert('Tạo caster thành công');
    }
  })
  .catch(err => {
    alert('Tạo caster thất bại, vui lòng thử lại.')
  })
  .finally(() => {
    let casterName = document.getElementById('casterName');
    casterName.value = '';
    $('#addCasterModal').modal('hide');
    getListCasterData();
  });
}

async function getListCasterData() {
  const fetchedCaster = await getAllCasters();
  listCaster = [...fetchedCaster];
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
    tableBody.innerHTML += `
      <tr class="table__row" >
        <th class="each__data" scope="row"> ${idx + 1} </th>
        <td class="each__data"> ${c.fullName} </td>
        <td class="each__data"> 
          <img class="data__image" src=${c.avatar} > 
        </td>
        <td class="each__data"> ${moment(c.createdAt).format('DD/MM/YYYY')} </td>
        <td class="each__data"> ${moment(c.updatedAt).format('DD/MM/YYYY')} </td>
        <td class="each__data">
          <button 
            class="action__btn update__btn"
            data-bs-toggle="modal"
            data-bs-target="#updateCasterModal"
            onclick="selectCaster(${c.id}, 'update')">
            u
          </button>
          <button 
            class="action__btn info__btn" 
            data-bs-toggle="modal" 
            data-bs-target="#infoCasterModal" 
            onclick="selectCaster(${c.id}, 'info')" >
            i
          </button>
          <button 
            class="action__btn delete__btn" 
            data-bs-toggle="modal" 
            data-bs-target="#deleteCasterModal" 
            onclick="selectCaster(${c.id}, 'delete')" >
            d
          </button>
        </td>
      </tr>`
  })
}

getListCasterData();

// select caster
function selectCaster(casterId, type) {
  const dataSelectedCaster = listCaster.find(c => c.id === casterId);
  selectedCaster = dataSelectedCaster;
  switch(type) {
    case 'update': {
      let casterName = document.getElementById('updateCasterName');
      casterName.value = selectedCaster.fullName;
      break;
    }
    case 'info': {
      let casterName = document.getElementById('infoCasterName');
      casterName.value = selectedCaster.fullName;
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
        Bạn có chắc chắn xóa caster
        <span style="color: red; font-weight: bold"> ${selectedCaster.fullName} </span>
        này không ?
      </div>`
      break;
    }
  }
}

// update caster
async function updateCasterSubmit() {
  const casterName = document.getElementById('updateCasterName').value;
  const image = document.getElementById('casterAvatarImage').files[0];
  let imageUrl = selectedCaster.avatar;
  if (image) imageUrl = await uploadImageFile(image);
  updateCaster(selectedCaster.id, { fullName: casterName, avatar: imageUrl })
  .then(res => {
    if (res.data.statusCode === 200) {
      alert('Cập nhật caster thành công');
    }
  })
  .catch(err => {
    alert('Cập nhật caster thất bại, vui lòng thử lại');
  })
  .finally(() => {
    $('#updateCasterModal').modal('hide');
    getListCasterData();
  });
}

// xóa caster
async function onDeleteCasterConfirm() {
  try {
    await deleteCaster(selectedCaster.id)
    .then(res => {
      if (res.data.statusCode === 200) {
        alert('Xóa caster thành công')
      }
    })
    .catch(err => {
      alert('Xóa caster bị lỗi, vui lòng thử lại')
    })
    .finally(() => {
      $('#deleteCasterModal').modal('hide');
      getListCasterData();
    });
  } catch (err) {
    console.log(err);
  }
}