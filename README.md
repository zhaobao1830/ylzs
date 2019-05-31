项目安装lin-ui

地址：http://doc.mini.7yue.pro/start/#%E5%AE%89%E8%A3%85

npm init

npm install lin-ui

然后用小程序官方IDE打开我们的小程序项目，找到 工具 选项，点击下拉选中 构建npm ，等待构建完成即可。

使用组件
json文件里：

{
  "usingComponents": {
    "l-icon": "path/to/icon/index"
  }
}

wxml里：
<l-icon name="add"> </l-icon>
