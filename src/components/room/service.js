const { QueryTypes } = require("sequelize");
const Room = require("../../models/room.model");
const sequelize = require("../../database");
const LIMIT = 5;

const sqlQueryForFindRooms =
  'SELECT r.*, cl1.name as "club1Name", cl1.image as "club1Image", cl2.name as "club2Name", cl2.image as "club2Image", c."fullName" as "casterName", c.avatar as "casterAvatar", l.name as "leagueName", l.image as "leagueImage" FROM (SELECT * FROM "Rooms" ORDER BY "createdAt" LIMIT :limit OFFSET :offset) r INNER JOIN "Casters" c ON r."casterId" = c."id" INNER JOIN "Clubs" cl1 ON cl1."id" = r."club1Id" INNER JOIN "Clubs" cl2 ON cl2."id" = r."club2Id" INNER JOIN "Leagues" l ON l."id" = r."leagueId"';

const sqlQueryForFindRoomById =
  'SELECT r.*, cl1.name as "club1Name", cl1.image as "club1Image", cl2.name as "club2Name", cl2.image as "club2Image", c."fullName" as "casterName", c.avatar as "casterAvatar", l.name as "leagueName", l.image as "leagueImage" FROM (SELECT * FROM "Rooms" WHERE id = :id) r INNER JOIN "Casters" c ON r."casterId" = c."id" INNER JOIN "Clubs" cl1 ON cl1."id" = r."club1Id" INNER JOIN "Clubs" cl2 ON cl2."id" = r."club2Id" INNER JOIN "Leagues" l ON l."id" = r."leagueId"';

const findRooms = async (offset) => {
  try {
    const rooms = await sequelize.query(sqlQueryForFindRooms, {
      type: QueryTypes.SELECT,
      replacements: { offset, limit: LIMIT },
    });
    return rooms;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

const createNewRoom = async (newRoom) => {
  const createdRoom = await Room.create(newRoom);
  return createdRoom;
};

const findRoomById = async (id) => {
  try {
    const rooms = await sequelize.query(sqlQueryForFindRoomById, {
      type: QueryTypes.SELECT,
      replacements: { id },
    });
    return rooms[0];
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

const editRoom = async (id, updatedRoom) => {
  const room = await Room.update({ ...updatedRoom }, { where: { id } });
  return room[0];
};

const deleteRoom = async (id) => {
  const deletedRoom = await Room.destroy({ where: { id } });
  return deletedRoom;
};

module.exports = {
  findRooms,
  createNewRoom,
  findRoomById,
  editRoom,
  deleteRoom,
  LIMIT,
};
