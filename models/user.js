'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Article);
    }
  };
  User.init({
    username: {
        type: DataTypes.STRING,
        unique :true , 
        allowNull :false
    },
    email: {
        type: DataTypes.STRING,
        unique :true , 
        allowNull :false
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      dialect:'admin' | 'author' | 'guest' 
    }
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};