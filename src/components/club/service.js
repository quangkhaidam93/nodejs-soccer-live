const Club = require("../../models/club.model");

const findAllClubs = async () => {
  const clubs = await Club.findAll();
  return clubs;
};

const findClubById = async (id) => {
  const club = await Club.findOne({ where: { id } });
  return club;
};

const createClub = async (newClub) => {
  const createdClub = await Club.create(newClub);
  return createdClub;
};

const editClub = async (id, updatedClub) => {
  const club = await Club.update(
    { ...updatedClub },
    { where: { id } }
  );
  return club[0];
};

const deleteClub = async (id) => {
  const deletedClub = await Club.destroy({ where: { id } });
  return deletedClub;
};

module.exports = {
  findAllClubs,
  findClubById,
  createClub,
  editClub,
  deleteClub,
};
