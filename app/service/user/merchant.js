const md5 = require("md5");
const Service = require("egg").Service;

class MerchantService extends Service {
  //查找某个商家的数据
  async getMerchantByLogin(userName, password) {
    return await this.app.mysql.get("merchant", {
      userName,
      password: md5(password),
    });
  }

  //新增商家
  async saveNew(params = {}) {
    let { merchant, userUuid, userName } = params;
    const { app } = this;
    const crateInfo = app.getCrateInfo(userUuid, userName);

    merchant = {
      ...merchant,
      ...crateInfo,
      password: md5(merchant.password),
      orgName: merchant.name,
      userType: "merchant",
      enableStatus: true,
    };

    return await app.model.User.Merchant.saveNew(merchant);
  }
}

module.exports = MerchantService
