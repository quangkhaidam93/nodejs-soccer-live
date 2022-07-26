const Caster = require("../../models/caster.model");

const findAllCasters = async ({ limit, offset }) => {
  try {
    const casters = await Caster.findAll({
      limit: limit,
      offset: offset,
      order: [['updatedAt', 'DESC']],
    });
    return casters;
  } catch (err) {
    return null;
  }
};

const findCasterById = async (id) => {
  try {
    const caster = await Caster.findOne({ where: { id } });
    return caster;
  } catch (err) {
    return null;
  }
};

const createCaster = async (newCaster) => {
  try {
    const createdCaster = await Caster.create(newCaster);
    return createdCaster;
  } catch (err) {
    return null;
  }
};

const editCaster = async (id, updatedCaster) => {
  try {
    const caster = await Caster.update({ ...updatedCaster }, { where: { id } });
    return caster[0];
  } catch (err) {
    return null;
  }
};

const deleteCaster = async (id) => {
  try {
    const deletedCaster = await Caster.destroy({ where: { id } });

    return deletedCaster;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};

module.exports = {
  findAllCasters,
  findCasterById,
  createCaster,
  editCaster,
  deleteCaster,
};
