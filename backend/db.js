const sql = require('mssql');
const { Sequelize } = require('sequelize');
require('dotenv').config();


const config = {
  database: process.env.SQL_DATABASE,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_SERVER,
  database: 'test',
  username: 'sa',
  password: 'Helloworld#1',
  host: '00-P3-D-NIC-62',
  dialect: 'mssql', // Replace with your database dialect (e.g., 'mysql', 'sqlite', 'mssql')
  dialectOptions: {
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to false if not using a self-signed certificate
    }
}
};



const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  logging: false, // Disable logging; default: console.log
});

const connectToDatabase = async () => {
  try {
      await sequelize.authenticate();
      console.log('Connected to the database');
  } catch (err) {
      console.error('Database connection failed!', err);
      throw err;
  }
};
module.exports = {
  sequelize,
  connectToDatabase,
};







































// --------------------------------------
// let sequelize;

// const connectToDatabase = async () => {
//     if (!sequelize) {
//         try {
//             sequelize = new Sequelize(config.database, config.user, config.password, {
//                 host: config.server,
//                 dialect: 'mssql', // or 'mysql', 'postgres', etc. based on your database
//                 dialectOptions: {
//                     options: {
//                         encrypt: config.options.encrypt,
//                         trustServerCertificate: config.options.trustServerCertificate
//                     }
//                 }
//             });

//             await sequelize.authenticate();
//             console.log('Connected to the database');

//         } catch (err) {
//             console.error('Database connection failed!', err);
//             throw err;
//         }
//     }
//     return sequelize;
// };

// module.exports = {
//     connectToDatabase,
//     sequelize // Export the Sequelize instance for defining models and syncing
// };


// const { Sequelize, DataTypes } = require('sequelize');
// const { MsSqlDialect } = require('@sequelize/mssql');

// const sequelize = new Sequelize({
//   dialect: MsSqlDialect,
//   server: '00-P3-D-NIC-62',
//   port: 1433,
//   database: 'test',
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'sa',
//       password: 'Helloworld#1',
//     },
//   },
// });

// module.exports= sequelize