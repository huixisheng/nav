# chrome-extensions
谷歌插件

> 很多想要的功能集成在不同的插件中，导致插件安装过多；还有不能满足自身的需求。于是开发一个适合自己平时的阅读和使用习惯。于是有了这个项目的整理，浏览器插件开发关键还是看官方的例子和相关文档

关于谷歌插件可以看[这里](https://github.com/huixisheng/awesome-awesome/blob/master/knowledge/%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8F%92%E4%BB%B6.md)

## 脚手架 ##
- https://github.com/HaNdTriX/generator-chrome-extension-kickstart 使用过，还不错
- https://extensionizr.com/!#{"modules":["hidden-mode","with-bg","with-persistent-bg","no-options","no-override"],"boolean_perms":[],"match_ptrns":[]}
- https://github.com/ironSource/node-generator-chrome-ninja
- https://github.com/yeoman/generator-chrome-extension
- https://github.com/deprecate/generator-devtools-theme


## 相关文档 ##

> 官方文档
- [Overview - Google Chrome](https://developer.chrome.com/extensions/overview)
- [Sample Extensions - Google Chrome](https://developer.chrome.com/extensions/samples)
- [Manifest File Format - Google Chrome](https://developer.chrome.com/extensions/manifest)
- [Content Scripts - Google Chrome](https://developer.chrome.com/extensions/content_scripts)

> 中文文档
- http://open.chrome.360.cn/extension_dev/overview.html
- https://crxdoc-zh.appspot.com/extensions/getstarted 中文文档

## 例子
- https://github.com/orbitbot/chrome-extensions-examples
- https://github.com/GoogleChrome/chrome-app-samples
- https://github.com/GoogleChrome/samples
- https://github.com/Yixi/ChromeExtensionDocument
- https://github.com/didikee/Dev_Tools
- https://github.com/nagerenxiong/ChromeExtension


## 问题汇总 ##

### 如何获得当前tab的url ###

```
>chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
 var url = tabs[0].url;
});
"permissions": [
    "tabs"
]
```
- http://ask.helplib.com/513905

### `input' is not allowed for specified platform.`

[Chrome extension warning: 'input' is not allowed for specified platform - Stack Overflow](https://stackoverflow.com/questions/26621038/chrome-extension-warning-input-is-not-allowed-for-specified-platform)


### 图片下载

```
checkedImages.forEach(function(checkedImage) {
    chrome.downloads.download({ url: checkedImage });
});
```
推荐 DownFaster

### csp
- invalid expression: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' blob: filesystem: chrome-extension-resource:".

[Content Security Policy (CSP) · Issue #65 · huixisheng/huixisheng.github.com](https://github.com/huixisheng/huixisheng.github.com/issues/65)

https://crxdoc-zh.appspot.com/extensions/tut_analytics

### 数据储存目录 
`chrome://version/`

`~/Library/Application Support/Google/Chrome/Default/Extensions`

### 实现复制 ###
- http://kodango.com/copybetter-extension
- https://developers.google.com/web/updates/2015/04/cut-and-copy-commands
- https://gist.github.com/neekey/6ee063f9a55bdb3acbf5

### 数据存储
1. localStorage
2. chrome.storage
3. Web SQL Database

## 其他
- https://www.zybuluo.com/zoand/note/125370
- http://www.cnblogs.com/guogangj/p/3235703.html
- chrome.history - Google Chrome 扩展程序开发文档（非官方中文版） https://crxdoc-zh.appspot.com/extensions/history
- [ Chrome扩展及应用开发（首发版）-图灵社区](http://www.ituring.com.cn/book/miniarticle/110853)

