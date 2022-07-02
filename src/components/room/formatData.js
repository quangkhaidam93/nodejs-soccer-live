const formatRoomRes = room => ({
  id: room.id,
  name: room.name,
  caster: {
    name: room.casterName,
    avatar: room.casterAvatar,
  },
  club1: {
    name: room.club1Name,
    image: room.club1Image,
  },
  club2: {
    name: room.club2Name,
    image: room.club2Image,
  },
  league: {
    name: room.leagueName,
    image: room.leagueImage,
  },
})

module.exports = {
  formatRoomRes
}