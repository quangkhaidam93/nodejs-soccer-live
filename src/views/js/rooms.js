async function createNewRoomSubmit() {
  const roomName = document.getElementById('roomName').value;
  const roomLinkURL = document.getElementById('roomLinkURL').value;
  const casterName = document.getElementById('casterName').value;
  const leagueName = document.getElementById('leagueName').value;
  const clubName_1 = document.getElementById('clubName_1').value;
  const clubName_2 = document.getElementById('clubName_2').value;
  createNewRoom({ 
    name: roomName, 
    roomLinkURL: roomLinkURL,
    casterId: casterName,
    leagueId: leagueName,
    club1Id: clubName_1,
    club2Id: clubName_2
  }).finally(() => {
    getAllRooms();
  });
}
