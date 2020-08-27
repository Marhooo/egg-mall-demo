module.exports = {
  SUCCESS_CODE: 0, // 成功
  NO_LOGIN_CODE: 100, // 未登录
  UNIQUE_CODE: 200, // 唯一性冲突
  ERROR_CODE: 500, // 失败

  // 设置token
  setToken(data = {}) {
    const { app } = this;
    let { name, userUuid, userName, userType, orgUuid } = data;

    // 如果需要得到精确的结果，需要自己另加额外的控制标志位
    if (decodeURI(name) === name) {
      name = encodeURI(name);
    }

    const token = app.jwt.sign(data, app.config.jwt.secret, {
      expiresIn: "12h",
    });
    const cookieConfig = {
      maxAge: 1000 * 3600 * 24 * 7,
      httpOnly: false,
      overwrite: true,
      signed: false,
    };

    this.cookies.set("token", token, { ...cookieConfig, httpOnly: true });
    this.cookies.set("name", name, cookieConfig);
    this.cookies.set("userUuid", userUuid, cookieConfig);
    this.cookies.set("userName", userName, cookieConfig);
    this.cookies.set("userType", userType, cookieConfig);
    this.cookies.set("orgUuid", orgUuid || userUuid, cookieConfig);
  },
};
