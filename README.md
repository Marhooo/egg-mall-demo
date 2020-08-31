# eggproject1
*Alt+M快捷键Markdown*
####0827 20:50 管理Admin登入实现
>- 数据迁移参考egg文档：[数据迁移](https://eggjs.org/zh-cn/tutorials/sequelize.html)
>- 关于数据迁移migrations中js文件里的```const uuidv1 = require("uuid/v1")```这段代码，在新版本uuid中是无法实现的，解决办法可以```npm install uuid@3.3.3```
>- ```npm install --save-dev sequelize-cli```安装sequelize文件迁移脚手架到开发环境中，或者可以全局安装

####date2
>- ```ctx.cookies.set(key, value, options)```中的options参数配置学习参考egg文档：[Cookie 与 Session](https://eggjs.org/zh-cn/core/cookie-and-session.html#mobileAside)





## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org