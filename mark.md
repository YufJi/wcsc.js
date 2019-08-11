# mark

css-tree

escodegen

css-loader

postcss-loader

esprima

cssbeautify

## 转换规则

类选择器： .后面加%%HERESUFFIX%%

### import

import 的文件需要用单引号或者双引号包起来，循环import需要报错

被import的样式文件需要打包到comm里面。默认app.wxss是被根import的。

森林（可能存在环）

划分出所有的树（dfs），切割成树的集合，每次从集合中取一个节点做dfs，dfs中如果遍历了节点两次说明存在环，dfs完将这棵树移除集合，接着再从集合取一个节点做dfs，以此类推，知道集合为空，划分出棵树。

对于一棵树，树的根没有被import，其他节点都被import了。

## postcss

bug:

```css
@import "./index2.wxss"

.icon-redo:before {
  content: "\e627";
}
```

解析到的atrull:

```json
{
  "name": "import",
  "params": "\"./index2.wxss\"\n\n.icon-redo:before"
}
```

## codegen

如果只有id选择器，不需要wxcs_originclass

## wcscbug

### background

```css
.search-r input {
    background: #f8f8f8 url(../images/search_logo.png) no-repeat 25rpx 18rpx;
}
```

```css
.search-r wx-input {
  background: #f8f8f8 url(../images/search_logo.png-do-not-use-local-path-./pages/index/index.wxss&102&16) no-repeat 25rpx 18rpx;
  wxcs_style_background: #f8f8f8 url(../images/search_logo.png) no-repeat 25rpx 18rpx;
}
```

background如果是本地图片的话，rpx没有转换

### -xxxrpx

```css
.detail {
  width: 100%-150rpx;
}
```

width后面的会被当成负150rpx处理

### xsinvalid

```wxss
@import "template/template.wxss";
/*seach*/
.search-container {
    height: 55rpx;
    width: 85%;
    margin: 20rpx auto;
    box-shadow: 1px 1px 2px 1px #565656;
    border-radius: 10rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10rpx 30rpx 10rpx 30rpx;

}
```

```txt
    -  "./pages/home/home.wxss": "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/home/home.wxss:96:1)"
    +  "./pages/home/home.wxss": "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/home/home.wxss:1:1)"
```

第一行是import不是selector
