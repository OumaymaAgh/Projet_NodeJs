'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
        type: Sequelize.STRING,
        unique :true , 
        allowNull :false
    },
    email: {
        type: Sequelize.STRING,
        unique :true , 
        allowNull :false
    },
    password: DataTypes.STRING,
    role: {
      type: Sequelize.STRING,
      dialect:'admin' | 'author' | 'guest' 
    }
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};