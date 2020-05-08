module.exports = {  
  up: (queryInterface) => {
    return queryInterface.createTable('Test');
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Test');
  }
};