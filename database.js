import { Sequelize } from 'sequelize';

const database = new Sequelize('admin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  
  export default database