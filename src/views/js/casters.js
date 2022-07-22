let listCaster = [];
let selectedCasterId;

async function uploadImageFile(image) {
  const imageUrl = await uploadImage(image);
  return imageUrl;
}

async function createNewCasterSubmit() {
  const casterName = document.getElementById('casterName').value;
  const image = document.getElementById('casterAvatarImage').files[0];
  let imageUrl;
  if (image) imageUrl = await uploadImageFile();
  createNewCaster({ fullName: casterName, avatar: imageUrl }).finally(() => {
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
    tableBody.innerHTML += `<tr class="table__row" ><th class="each__data" scope="row" > ${idx + 1} </th>
        <td class="each__data" > ${c.fullName} </td>
        <td class="each__data" > ${c.avatar} </td>
        <td class="each__data" > ${moment(c.createdAt).format('DD/MM/YYYY')} </td>
        <td class="each__data" > ${moment(c.updatedAt).format('DD/MM/YYYY')} </td>
        <td class="each__data">
          <button class="action__btn update__btn" data-bs-toggle="modal" data-bs-target="#updateCasterModal" onclick="selectCaster(${c.id})" >u</button>
          <button class="action__btn info__btn" data-bs-toggle="modal" data-bs-target="#infoCasterModal" onclick="selectCaster(${c.id})" >i</button>
          <button class="action__btn delete__btn" data-bs-toggle="modal" data-bs-target="#deleteCasterModal" onclick="selectCaster(${c.id})" >d</button>
        </td>
      </tr>`
  })
}

getListCasterData();

// select caster
function selectCaster(casterId) {
  selectedCasterId = casterId;
}

// update caster
async function updateCasterSubmit(casterId) {
  const casterName = document.getElementById('updateCasterName').value;
  const image = document.getElementById('casterAvatarImage').files[0];
  const selectedCaster = listCaster.find(c => c.id === selectedCasterId);
  let imageUrl;
  if (image) imageUrl = await uploadImageFile(image);
  updateCaster(selectedCasterId, { fullName: casterName, avatar: imageUrl }).finally(() => {
    $('#updateCasterModal').modal('hide');
    getListCasterData();
  });
}

// xóa caster
async function onDeleteCasterConfirm(casterId) {
  try {
    await deleteCaster(selectedCasterId);
    $('#deleteCasterModal').modal('hide');
    getListCasterData();
  } catch (err) {
    console.log(err);
  }
}