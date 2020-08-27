'use strict';
const fecha = require('fecha');
const isNumber = require('lodash/isNumber');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598251665346_2604';

  // 小程序只能存storage，关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  },

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'cgz123456',
      database: 'eggproject_koda',
    },
    // 所有数据库配置的默认值
    default: {},
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  config.sequelize = {
    dialect: 'mysql', // support: mysql, postgres....
    database: 'eggproject_koda',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'cgz123456',
    timezone: '+08:00',
    define: {
      createdAt: 'createdTime',
      updatedAt: 'lastModifiedTime',
      freezeTableName: true,
      underscored: false,
      getterMethods: {
        createdTime() {
          const createdTime = this.getDataValue('createdTime');
          if (createdTime) {
            return fecha.format(createdTime, 'YYYY-MM-DD HH:mm:ss');
          }
        },
        lastModifiedTime() {
          const lastModifiedTime = this.getDataValue('lastModifiedTime');
          if (lastModifiedTime) {
            return fecha.format(lastModifiedTime, 'YYYY-MM-DD HH:mm:ss');
          }
        },
      },
      setterMethods: {
        version(value) {
          if (isNumber(value)) {
            this.setDataValue('version', value + 1);
          }
        },
      },
    },
  }

  config.jwt = {
    secret: '123456'
  }

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
