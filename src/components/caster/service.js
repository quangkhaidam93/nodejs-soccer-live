const Caster = require("../../models/caster.model");

const findAllCasters = async () => {
  const casters = await Caster.findAll();
  return casters;
};

const findCasterById = async (id) => {
  const caster = await Caster.findOne({ where: { id } });
  return caster;
};

const createCaster = async (newCaster) => {
  const createdCaster = await Caster.create(newCaster);
  return createdCaster;
};

const editCaster = async (id, updatedCaster) => {
  const caster = await Caster.update({ ...updatedCaster }, { where: { id } });
  return caster[0];
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
