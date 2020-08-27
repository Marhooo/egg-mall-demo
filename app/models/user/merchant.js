module.exports = (app) => {
  const { Sequelize, model, getSortInfo, checkUpdate } = app;
  const { Op } = Sequelize;
  const merchantSchema = require("../../schema/merchant.js")(app);
  const Merchant = model.define("merchant", merchantSchema);

  //新增商家
  Merchant.saveNew = async (merchant) => {
    await Merchant.create(merchant);
    return merchant.uuid;
  };
};
