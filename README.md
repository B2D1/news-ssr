# news-ssr

## 运行
```js
cd news-ssr
# 开启后端服务 8080
node server.js
# 开发模式 3000
npm run dev
# 打包
npm run build
# 运行打包文件 3000
npm run start
# 导出静态资源
npm run export
# 开启静态服务，监听 3000 端口，需安装 serve 包
cd out && serve -p 3000
```

## 坑点

-   当修改了 `Schema` 配置，需要删除数据库并重启
-   `bodyParser` 必须放在 `router` 之前
-   `Mongoose` 查找不到单个对象时，返回 `null`
-   使用 `fetch` 时，当后端返回 `204 No Content`，无法调用 `json()`，且返回的文本是**只读**的，可以自己去手动调用 `JSON.parse()`
-   `Mongoose` 基于回调函数的形式，可以用 `Promise.all()` 来简化解决多个修改操作
-   一对多，多对一关系，使用 `ref，Schema.Types.ObjectId，populate`
