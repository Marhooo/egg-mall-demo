'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { user } = controller;


  //管理端admin
  router.post('/user/login', user.common.login)
};
