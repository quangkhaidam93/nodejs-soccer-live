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
              src="https://sta.cvndnss.com/file/common/20210503/fca5954ec22137ad05325506d6645592">
            <span class="league__name">${room.leagueId}</span>
          </div>
        </div>
        <div class="battle__info">
          <div class="battle__left">
            <div class="team__battle">
              <img class="team__logo" src="https://sta.cvndnss.com/file/imgs/team/football/20121218210601.gif" data-src="https://sta.cvndnss.com/file/imgs/team/football/20121218210601.gif">
              <span class="team__name">Blaublitz Akita</span>
            </div>
            <div class="team__battle">
              <img class="team__logo" src="https://sta.cvndnss.com/file/imgs/team/football/20150923114054.png" data-src="https://sta.cvndnss.com/file/imgs/team/football/20150923114054.png" alt="">
              <span class="team__name">Renofa Yamaguchi</span>
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