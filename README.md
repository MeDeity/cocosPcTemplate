### 使用说明
使用前请先全局安装 electron,要不然无法识别 electron 命令
```bash
npm install electron -g
```

使用cocos打包web-desktop,然后放置到[cocosExport/web-desktop/]该目录下

在index.js中可以修改分辨率和标题

const baseConfig = {
    width: 768,
    height: 768,
    windowTile:'DemoTitle'
}

运行项目前请先安装依赖
```bash
npm install -D electron
npm run start
```
![运行效果](image.png)

### 关于打包
安装electron-packager
```bash
npm install electron-packager -g --registry=https://registry.npm.taobao.org
```
打包时
```bash
electron-packager . HelloWorld --platform=win32 --arch=x64 --icon=computer.ico --out=./out --asar --app-version=0.0.1 --overwrite --ignore=node_modules --electron-version 5.0.0
```
