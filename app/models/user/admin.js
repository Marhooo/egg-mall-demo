module.exports = (app) => {
  const { model, checkUpdate } = app;
  const adminSchema = require("../../schema/admin.js")(app);
  const Admin = model.define("admin", adminSchema);

  Admin.get = async ({ uuid, attributes }) => {
    return await Admin.findOne({
      attributes,
      where: { uuid },
    });
  };

  //修改商家密码
  Admin.savePasswordModify = async (params) => {
    const {
      uuid,
      oldPassword,
      password,
      lastModifierId,
      lastModifierName,
    } = params;
    const result = await Admin.update(
      { password, lastModifierId, lastModifierName },
      {
        where: {
          uuid,
          password: oldPassword,
        },
      }
    );

    checkUpdate(result, "旧密码不正确");
    return uuid;
  };

  return Admin;
};
