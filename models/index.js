
const { Sequelize } = require('sequelize');

const initModels = require('./init-models');
//const connPostgresString = process.env.DB_URL;//add require('dotenv').config(); into www
//const connPostgresString = 'postgres://wxjfftihybqpun:584926c1c528115d979e1e2cd8ac86a41acc3da6b44eaefdb5be61662790a3de@ec2-3-227-149-67.compute-1.amazonaws.com:5432/d75gjnh8aca4q1';
const connPostgresString = 'postgres://postgres:KJPAMI@localhost:5432/postgres';
const sequelize = new Sequelize(connPostgresString, {
  dialect: 'postgres',
});

/*
const sequelize = new Sequelize(connPostgresString, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
    }
    }
  });
*/
  
module.exports = {
  sequelize,
  models: initModels(sequelize),
};

