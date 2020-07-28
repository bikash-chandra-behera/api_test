module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
     sex: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };