const { Tea } = require('../db/models');
const { Like } = require('../db/models')

class TeaServices {
  static getAllTea = async () => (await Tea.findAll({include:[{model: Like, as:'TeaLikes'}]})).map((tea) => tea.get());

  static getOneTea = async (id) => {
    const tea = await Tea.findByPk(id);
    return tea ? tea.get() : null;
  };

  static getTeaName = async (title) => {
    const tea = await Tea.findOne({ where: { title } });
    return tea ? tea.get() : null;
  };

  static createTea = async ({ title, place, img, description, comm }) => {
    let tea;
    tea = await this.getTeaName(title);
    if (tea) {
      return 'such tea already exists';
    }
    tea = await Tea.create({ title, place, img, description, comm });
    tea=await Tea.findOne({where:{id:tea.id}, include:[{model: Like, as:'TeaLikes'}]})
    return tea.get();
  };

  static updateTea = async (teaId, data) => {
    const tea = await Tea.findByPk(teaId);
    if (tea) {
      return tea.update(data);
    }
    return null;
  };

  static deleteTea = async (teaId) => {
    const tea = await Tea.findByPk(teaId);
    if (tea) {
      return tea.destroy();
    }
    return 'this tea does not exist';
  };
}

module.exports = TeaServices;
