'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql:{
    enable: true,
    package: 'egg-mysql'
  },

  sequelize:{
    enable: true,
    package: 'egg-sequelize'
  },

  jwt: {
    enable: true,
    package: 'egg-jwt'
  },

  validate:{
    enable: true,
    package: 'egg-validate'
  },


  
};
