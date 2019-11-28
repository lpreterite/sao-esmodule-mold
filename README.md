# sao-esmodule-mold
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flpreterite%2Fsao-esmodule-mold.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Flpreterite%2Fsao-esmodule-mold?ref=badge_shield)


使用`rollup`构建的项目模板，主要用于开发组件的项目。在工作中遇到的问题将会持续在这个仓库提交更新，如果你一样遇到此类问题希望能在issues见到你的反馈，PR更是欢迎👏

包含功能：

- 打包代码（支持Vue文件）
- 单元测试
- 测试覆盖报告

## 如何使用

项目基于⚔[sao](https://github.com/saojs/sao)的模板制作而成，使用得先安装sao。

```bash
yarn global add sao
# or
npm i -g sao
```

## 安装模板

### From npm

```bash
sao esmodule-mold my-project
```

### From git

```bash
sao lpreterite/sao-esmodule-mold my-project
```

等待安装完成后就能使用以下命令看效果了👍

### 包含命令

- `build`: 打包构建项目
- `watch`: 监听文件变化，基于rollup
- `test`: 测试并显示测试覆盖情况，基于nyc和mocha
- `pretest`: 测试前调用，构建代码
- `prepublish`: 发布前调用, 测试代码

#### 如何使用命令

```sh
// 打包构建项目
npm run build
// yarn build

// 监听文件变化
npm run watch
// yarn watch

// 测试并显示测试覆盖情况
npm run test
// yarn test
```

## 各插件功能及分工

- `rollup`：简单易用的打包工具，用在组件（或独立功能模块）的打包上是挺方便的。
- `mocha`：单元测试工具，你可以使用其他工具来替换他，不过这个仓库暂时没有其他测试工具的例子。
- `chai`：断言库，一般和测试工具一并使用。
- `nyc`：生成测试代码的覆盖报告工具，一般和测试工具一并使用。
- `reify`：能让你放心使用ES2015的库，在执行前引入就可以了，这个仓mocha测试运行时会预先加载所以测试代码也能安心使用ES2015代码。
- `jsdom`：模拟浏览器环境的工具，在测试vue组件时会用到。


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flpreterite%2Fsao-esmodule-mold.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flpreterite%2Fsao-esmodule-mold?ref=badge_large)