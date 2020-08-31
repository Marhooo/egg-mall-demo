const Controller = require("../../core/base_controller");

class UserCommonController extends Controller {
  //登录
  async login() {
    const { ctx, app } = this;
    const { userName, password, loginType } = ctx.request.body;
    let user;

    if (loginType === "admin") {
      // 根据userName获取管理员
      user = await ctx.service.user.admin.getAdminByLogin(userName, password);
    } else {
      // 根据userName获取商家
      user = await ctx.service.user.merchant.getMerchantByLogin(
        userName,
        password
      );
    }

    if (app._.isEmpty(user)) {
      return this.fail(ctx.ERROR_CODE, "账号或密码错误");
    }

    const { uuid: userUuid, userType, name, orgUuid } = user;
    const result = { name, userUuid, userName, userType, orgUuid };
    ctx.setToken(result);
    this.success(result);
  }

  //注销
  logout(){
    this.ctx.removeToken();
    this.success();
  }

  
}

module.exports = UserCommonController