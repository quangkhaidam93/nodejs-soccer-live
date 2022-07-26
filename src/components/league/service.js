const League = require("../../models/league.model");

const findAllLeagues = async () => {
  try {
    const leagues = await League.findAll();
    return leagues;
  } catch (err) {
    return null;
  }
};

const findLeagueById = async (id) => {
  try {
    const league = await League.findOne({ where: { id } });
    return league;
  } catch (err) {
    return null;
  }
};

const createLeague = async (newLeague) => {
  try {
    const createdLeague = await League.create(newLeague);
    return createdLeague;
  } catch (err) {
    return null;
  }
};

const editLeague = async (id, updatedLeague) => {
  try {
    const league = await League.update({ ...updatedLeague }, { where: { id } });
    return league[0];
  } catch (err) {
    return null;
  }
};

const deleteLeague = async (id) => {
  try {
    const deletedLeague = await League.destroy({ where: { id } });
    return deletedLeague;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

module.exports = {
  findAllLeagues,
  findLeagueById,
  createLeague,
  editLeague,
  deleteLeague,
};
