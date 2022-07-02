const League = require('../../models/league.model');

const findAllLeagues = async () => {
  const leagues = await League.findAll();
  return leagues;
};

const findLeagueById = async (id) => {
  const league = await League.findOne({ where: { id } });
  return league;
};

const createLeague = async (newLeague) => {
  const createdLeague = await League.create(newLeague);
  return createdLeague;
};

const editLeague = async (id, updatedLeague) => {
  const league = await League.update(
    { ...updatedLeague },
    { where: { id } }
  );
  return league[0];
};

const deleteLeague = async (id) => {
  try {
    const deletedLeague = await League.destroy({ where: { id } });
    return deletedLeague;
  } catch(err) {
    console.log("Error", err);
    return null;
  }
};

module.exports = {
  findAllLeagues,
  findLeagueById,
  createLeague,
  editLeague,
  deleteLeague
}
