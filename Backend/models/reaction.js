'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Post, {foreignKey: 'post_id'})
      this.belongsTo(models.User, {foreignKey: 'user_id'})
    }
  }
  Reaction.init({
    post_id: DataTypes.INTEGER,
    reaction: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reaction',
  });
  return Reaction;
};
