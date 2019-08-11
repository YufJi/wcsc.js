# 实现微信开发者工具的wxss文件编译器

wcsc.js是wxss文件编译器的nodejs实现

目标：

- typescript编写该工具
- 实现微信开发者工具的二进制工具`wcsc`
- 完善的测试用例支持
- 完善的性能测试
- 客观的编译性能

## 项目如何使用wcsc.js

npm安装wcsc.js依赖：

```sh
npm install wcsc.js --save
```

代码示例：

```nodejs
const WCSC = require('wcsc.js').WCSC;
const compileConfig = {};
const FILES = ["./app.wxss", "./pages/index/index.wxss"]; // 需要编译的文件列表
const FILESBASE = "/user/xxx/MiniAppProj"; // 需要编译项目的目录
compileConfig.cmd = ["-om", "-db", "-pc", FILES.length]; // wcsc.js编译的cmd参数
compileConfig.FILES = FILES; //  wcsc.js编译的FILES参数
compileConfig.FILESBASE = FILESBASE; //  wcsc.js编译的FILESBASE参数
const wcscjs = new WCSC(compileConfig);
wcscjs.compile().then((map) => {
  console.log("wcsc.js编译完成，生成的map为: ", map);
}).catch((err) => {
  //err: {code: -1, message: "错误信息"}
  console.error("wcsc.js编译失败，失败失败信息: ", err.message);
});
```

## 本地开发wcsc.js

### 下载代码

```sh
git clone https://github.com/caijw/wcsc.js.git
cd wcsc.js
npm install
```

### 代码提交前的自动化测试：***已经累计上百个开源的小程序***

支持`macOs`和`windows`，不支持`linux`

1 正向用例（wcsc.js和wcsc的正常运行且运行结果必须完全一致）

```sh
npm run test
```

2 反向用例（wcsc.js和wcsc都必须运行报错，提示开发者报错信息，报错信息不要求完全一致）

```sh
npm run test:fail
```

### 代码提交前的性能测试

支持`macOs`和`windows`，不支持`linux`

```sh
npm run benchmark
```

## wcsc

微信开发者工具中的二进制编译器，用来将`wxss`文件，编译成`js`文件，

`js`文件在`jsCore`中执行后，可以得到`setCssToHead`函数，`setCssToHead`函数用来把样式挂载到页面

如何获得`wcsc`？ [下载mac版本微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，安装后，打开`Applications`目录，找到微信开发者工具，右键`Show Package Contents`，在`Contents/Resources/package.nw/js/vender/wcsc`（该目录可能会被调整）。

## 编译参数支持

```sh
wcsc [-lc] [-o OUTPUT] [-s <NAME OF FILE>] [-st] [-js] [-db] [-cp <CLASS PREFIX>] [-pc <FILE COUNT>] <[-sd <SOURCE DIRECTLY>] | <root_css_file..> [import_css_files..]>
-lc: need to lint the css
-sd: 'someclass { font-size: 18px }'
-s: read from stdin
-o: output destination (default stdout)
-st: print tree
-db: add debug attr
-js: js formate output
-cp: add class prefix
-pc: page wxss files count
```

没有支持全部的参数，已经支持的参数如下：

### [-db]

在生成的样式中插入一些调试调试信息。

主要是插入了wxcs_originclass、wxcs_fileinfo、wxcs_style_xxx等

### [-pc]

需要编译的传入文件的数目，如果传入了多余需要编译的数目，

会按照字典排序后，去掉后面多余的文件。

### [-om] out put map directly

`wcsc`输出的是一串字符串，需要进行`split`后才能得到最终需要的`map`

`wcsc.js`对其进行了优化，传入该参数，可以直接得到最终需要的`map`

### [--subpackage]

如果小程序存在独立分包，需要传递该参数，同时传递独立分包的路径。

例如：

```sh
wcsc -db -pc 3 ./index.wxss ./subpackage/index.wxss ./subpackage/index1.wxss --subpackage ./subpackage/
```

独立分包请查阅微信文档：<https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html>

## 自动化测试

运行：

```sh
npm run test
```

```sh
npm run test:fail
```

测试样例地址：

<https://github.com/caijw/wcsc.js/tree/master/test/succSuit>

<https://github.com/caijw/wcsc.js/tree/master/test/failSuit>

完善的测试样例，用例还在持续增加，以覆盖到大部分的场景。

正向用例-测试流程要点：

1. `wcsc.js`将完整的小程序wxss源码，编译成`json`[map.wcscjs.json](https://github.com/caijw/wcsc.js/blob/master/test/succSuit/suit0/out/map.wcscjs.json)
2. `wcsc`将完整的小程序wxss源码，编译成`json`代码[map.wcsc.json](https://github.com/caijw/wcsc.js/blob/master/test/succSuit/suit0/out/map.wcsc.json)
3. 构建一个模拟浏览器的沙箱环境，提取`wcsc.js`生成的`map.wcscjs.json`的所有`setCssToHead`函数然后运行，得到最终生成的所有`css`样式`wcscjs.css`
4. 构建一个模拟浏览器的沙箱环境，提取wcsc生成的`map.wcsc.json`的所有`setCssToHead`函数然后运行，得到最终生成的所有`css`样式`wcsc.css`
5. 对比`wcscjs.css`和`wcsc.css`是否完全一致

反向用例-测试流程要点：

测试样例均是不合法的样例

1. `wcsc.js`编译样例项目，报错
2. `wcsc`编译样例项目，报错
3. `wcsc.js`和`wcsc`是否都报错了

## 性能测试

运行：

```sh
npm run benchmark
```

复用了自动化测试的测试样例，对比测试了`wcsc.js`和`wcsc`编译相同的小程序项目的耗时对比
