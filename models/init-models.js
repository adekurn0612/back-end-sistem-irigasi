import {Sequelize} from "sequelize";
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST, // You can add the host here if needed
    dialect: 'mysql',
    port: process.env.DB_PORT, // Include port in the options object
  }
);


import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _coba from  "./coba.js";
import _user from  "./user.js";

function initModels(sequelize) {
  const coba = _coba.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);


  return {
    coba,
    user,
  };
}

const models = initModels(sequelize)
export default models;
export  {sequelize};

