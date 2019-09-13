# news-ssr

## 坑点
- 当修改了 `Schema` 配置，需要删除数据库并重启
- `bodyParser` 必须放在 `router` 之前
- `Mongoose` 查找不到单个对象时，返回 `null`