const _ = require("lodash");
const fecha = require("fecha");

module.exports = {
  _,
  dayFormat: "%Y-%m-%d",
  dayTimeFormat: "%Y-%m-%d %H:%i:%s",



  
  // modify所需的一些公共字段
  getModifyInfo(modifyId, modifyName) {
    return {
      lastModifierId: modifyId || 'system',
      lastModifierName: modifyName || 'system',
    };
  },

  // 检查update
  checkUpdate(arr, message) {
    if (arr.includes(0)) {
      const error = new Error(message || "保存失败，请刷新后重试！");
      error.status = 422;
      throw error;
    }
  },
};
