let highlightRoom;
let listRooms = [];

async function getListRoomData() {
  console.log("🚀 ~ file: homepage.js ~ line 6 ~ getListRoomData ~ fetchedRooms")
  const fetchedRooms = await getAllRooms();
  console.log("🚀 ~ file: homepage.js ~ line 6 ~ getListRoomData ~ fetchedRooms", fetchedRooms)
  const listRoom = [...fetchedRooms];
  console.log("🚀 ~ file: homepage.js ~ line 8 ~ getListRoomData ~ listRoom", listRoom)

  highlightRoom = listRoom[0];
  listRooms = listRoom;

  if (listRoom.length > 0 && highlightRoom) {
    const matchNewestInfo = document.getElementById("matchInfoNewest");
    matchNewestInfo.innerHTML = `
      <iframe class="livestream__video" src=${highlightRoom.streamUrl}></iframe>
    `
    listRoom.forEach((room, roomIdx) => {
      console.log("🚀 ~ file: homepage.js ~ line 20 ~ listRoom.forEach ~ room", room)
      if (roomIdx !== 0) {
        const videoList = document.getElementById("videoList");
        videoList.innerHTML = `
          <div class="miniVideo">
            <iframe 
              class="mini__video "
              src=${room.streamUrl} >
            </iframe>
          </div>
        `
      }

      const matchInfoList = document.getElementById("matchInfoList");
      matchInfoList.innerHTML = `
      <div class="matchInfo">
        <div class="match__header">
          <div class="matchHeader__left">
            <img
              class="sport__icon"
              src=${room.league.image}>
            <span class="league__name">${room.league.name}</span>
          </div>
        </div>
        <div class="battle__info">
          <div class="battle__left">
            <div class="team__battle">
              <img 
                class="team__logo" 
                src=${room.club1.image}
                data-src=${room.club1.image}>
              <span class="team__name">${room.club1.name}</span>
            </div>
            <div class="team__battle">
              <img 
                class="team__logo" 
                src=${room.club2.image}
                data-src=${room.club2.image}>
              <span class="team__name">${room.club2.name}</span>
            </div>
          </div>
        </div>
      </div>
      `;
    })
  }
}

async function getListCasters() {
  const resListCaster = await getAllCasters();
  listCaster = [...resListCaster];
  if(listCaster.length > 0) {
    listCaster.forEach((caster, casterIdx) => {
      console.log("🚀 ~ file: homepage.js ~ line 73 ~ listCaster.forEach ~ caster", caster)
      const casterSlider = document.getElementById("casterSlider");
      casterSlider.innerHTML = `
      <div class="blvIcon__container">
        <img 
          class="blv__image"
          src=${caster.avatar}>
        <div class="blv__name">
          ${caster.fullName}
        </div>
      </div>
      `
    })
  }
}

getListCasters();
getListRoomData();