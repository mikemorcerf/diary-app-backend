module.exports = {  
  up: (queryInterface) => {
    return queryInterface.createTable('Test2');
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Test2');
  }
};