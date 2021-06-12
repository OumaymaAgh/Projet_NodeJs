const { User } = require('../models')

module.exports = {
  getAllUsers() {
    return User.findAll()
  },
  // méthodes à implémenter
  getUsers(offset = 0, limit = 10) { 
      return user.findAll(offset,limit) ; 
  },
  getAdmins() {
    return user.findAll({
      where:{
        role :"admin"
      }
    });
   },
  getAuthors() { 
    return user.findAll({
      where:{
        role :"author"
      }
    });
  },
  getGuests(){
    return user.findAll({
      where:{
        role :"guest"
      }
    });
   }, 
  getUser(id) { 
    return user.findAll({
      where:{
        id :id
      }
    });
  },
  getUserByEmail(email) {
    return user.findAll({
      where:{
        email : email
      }
    });
   },
  addUser(user) {
    return user.create(user) ;
   },
  updateUser(id, updates) {
    return User.update(updates, {
      where: {
        id: id,
      },
    });
   },
   deleteUser(id) {
    return User.destroy({
      where: {
        id: id,
      },
    });
  },
  // D'autres méthodes jugées utiles
}
