let highlightRoom;
let listRooms = [];


async function getListRoomData() {
  const fetchedRooms = await getAllRooms();
  const listRoom = [...fetchedRooms];

  highlightRoom = listRoom[0];
  listRooms = listRoom;

  const matchNewestInfo = document.getElementById("matchInfoNewest");
  matchNewestInfo.innerHTML = `
    <iframe class="livestream__video" src="${highlightRoom?.streamUrl}"></iframe>
  `
}

getListRoomData();