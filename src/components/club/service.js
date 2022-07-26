const Club = require("../../models/club.model");

const findAllClubs = async () => {
  try {
    const clubs = await Club.findAll();
    return clubs;
  } catch (err) {
    return null;
  }
};

const findClubById = async (id) => {
  try {
    const club = await Club.findOne({ where: { id } });
    return club;
  } catch (err) {
    return null;
  }
};

const createClub = async (newClub) => {
  try {
    const createdClub = await Club.create(newClub);
    return createdClub;
  } catch (err) {
    return null;
  }
};

const editClub = async (id, updatedClub) => {
  try {
    const club = await Club.update({ ...updatedClub }, { where: { id } });
    return club[0];
  } catch (err) {
    return null;
  }
};

const deleteClub = async (id) => {
  try {
    const deletedClub = await Club.destroy({ where: { id } });
    return deletedClub;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

module.exports = {
  findAllClubs,
  findClubById,
  createClub,
  editClub,
  deleteClub,
};
