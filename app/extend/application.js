const _ = require("lodash");
const fecha = require("fecha");

module.exports = {
  _,
  dayFormat: "%Y-%m-%d",
  dayTimeFormat: "%Y-%m-%d %H:%i:%s",


  // 获取排序条件数组
  getSortInfo(sort) {
    return _.isEmpty(sort) ? [['createdTime', 'DESC']] : sort;
  },
  // create所需的一些公共字段
  getCrateInfo(creatorId, creatorName) {
    return {
      creatorId,
      creatorName,
      lastModifierId: creatorId,
      lastModifierName: creatorName,
    };
  },
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
