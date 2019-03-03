记录一些想法和要做的事情
---

## TODO ##
- [ ] 脚本抓取 favicon.ico 存入文件夹
- [ ] bookmarks 解析脚本
- [ ] 搜索的支持
- [ ] 开发者常用功能使用手册？


## 添加 subtree ##
``` bash
$ git remote add fe-weekly git@github.com:huixisheng/FE-Weekly.git
$ git subtree add --prefix=resources/FE-Weekly fe-weekly master
$ git subtree pull --prefix=resources/FE-Weekly fe-weekly master --squash
$ git subtree split --rejoin --prefix=resources/FE-Weekly --branch new-branch
$ git push fe-weekly new-branch:master
```