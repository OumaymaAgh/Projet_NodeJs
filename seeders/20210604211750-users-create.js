'use strict';
const faker = require('faker');

const users = [...Array(20)].map((user) => (
  {
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    role: faker.random.arrayElement([
      "admin", "author", "guest"
    ]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};