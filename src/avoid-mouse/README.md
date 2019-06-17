---
sidebarDepth: 3
pageClass: custom-content-body
---
::: tip
摆脱鼠标开发是一件很有意义并且十年受益的事情（为什么只受益十年？因为有该技能的开发者十年后大都是架构师了~~:joy:）\
此章节以windows为例，对于mac用户只需要把ctrl换成command即可
:::

## 快速打开面板
`ctrl + tab` 在打开的文件与功能面板之间切换 （非常强大，必考点）

IDEA 内置了很多有用的工具和面板，比如 Console、Version Control 等，
如果用鼠标去找再去一个个点真的很费劲，可以通过 IDEA 的全局动作搜索功能进行查找，
快捷键是 `Ctrl + Shift + A`，在搜索框中输入工具或动作的关键字就能定位到，自己尝试下吧，非常强大！

::: tip
`Ctrl + Shift + A`非常强大，末尾会特别介绍几个与其相关的常用的功能。
:::

## 快速定位文件
IDEA 通过连续点击<b>两次 Shift 键</b>可以打开全局文件名查找和最近访问文件查找；\
`Ctrl + E` 打开最近访问文件的查找框；\
`ctrl + shift + E`	打开最近编辑的文件

## 视野
`ctrl + up/down` 当前文件的视野转到上一行/下一行，不加`ctrl`键的效果是不一样的，现在去尝试一下呗\


## 快速跳转行/列
ctrl + G 打开跳转到行/列功能\
通常情况，你只需要输入数字即可跳转到相应的代码行，例如`144`，跳转到文件第144行\
你也可以写 `10:12`， 它的意思是：跳转到文件中第10行第12列

## 跳转到定义
有时候你想知道`customMethod`这个函数内部是如何实现的，尝试：`ctrl + b`

## 行操作
`ctrl + ←/→` 移动的一个词的开始或者结束\
`Ctrl + Home` 	第一行代码\
`Ctrl + End	` 最后一行代码 \
`Ctrl + Shift + L` 格式化/美丽排版 \
`Alt + Enter` 超级牛批的智能提示 \


## 全局查找替换
全局全文搜索 ： Ctrl + Shift + F \
全局替换 ： Ctrl + Shift + R


## 修改并修改引用
IDEA 支持对文件名/变量名重命名而不影响引用关系，快捷键： Shift + F6
::: tip
修改文件名可以同时修改代码中对于改文件名的引用，
修改变量名可以同时修改上下文中后续对于该变量名的引用。
:::
::: warning
对于Javascript开发，`Shift + F6`修改是一项比较危险的操作，因为Javascript的弱类型语言的关系，很多时候idea不知道俩个都叫做`customMethod`变量是否是同一个,
因此idea会提示你是否修改，然而这个提示面板是晦涩难懂的，如果你不熟悉它就盲目点了`Yes`，可能会意外修改了其它的代码。

对于强类型语言，例如Java，这个操作通常是非常安全的。
:::

## ctrl + shift + A中常用的功能 / Actions
`ctrl + shift + A`会打开一个输入框，你可以输入字符来搜索文件、符号以及动作。
一般情况下其最强大的功能就是搜索动作（在idea里英文叫做Action），并且它支持模糊搜索。
下面列举一些对摆脱鼠标编程非常有帮助的Action


### 版本管理
* `ctrl + shift + A` => 输入"version control" 进入版本管理面板，查看历史commit记录，本地修改等

### 命令行面板
* `ctrl + shift + A` => 输入"terminal"

### 专注模式
> （也叫演出模式，表演模式）Enter/QUIT Presentation mode 进入or退出专注模式，你自己试一下会发现，非常酷，非常专注！(一般简写prese即可搜索到)
* `ctrl + shift + A` => 输入 "presentation"

### 更多Actions

|     Action    |                    打开方式                                  |  用处 |
|:-------------:|------------------------------------------------|-----------|
|       About  |      `ctrl + shift + A` => 输入 "about"        | 查看编辑器的大概信息 版本号等 |
|       branches      |           `ctrl + shift + A` => 输入 "branches"              |如果你是使用git做版本管理，尝试这个Action 方便切换、修改、merge、push分支，是滴分支的管理这里全部完成|
|       fetch      |           `ctrl + shift + A` => 输入 "fetch"              | 如果你是使用git做版本管理，立刻更新当前分支 |
|       Maven  |      `ctrl + shift + A` => 输入 "maven"        | 查看、导入、构建maven项目，maven管理都在这里 |
|       settings  |      `ctrl + shift + A` => 输入 "setting"        | 修改编辑器的全局设置 |
|       safe write  |      `ctrl + shift + A` => 输入 "safe write"        | 很多时候你需要关闭这个设置，而且它是默认打开的。因为当它处于打开状态时，一些构建工具无法检测到代码文件的变化 |
|       TODO      |           `ctrl + shift + A` => 输入 "TODO"              | 查看代码中TODO标签|

:::tip
在打开的任何Action面板，如果有多个tab页，你都可以使用 `alt + ←/→` 来左右切换tab页。
:::



## 参考文档
* [https://isudox.com/2017/06/25/coding-with-keyboard-no-mouse/](https://isudox.com/2017/06/25/coding-with-keyboard-no-mouse/)


<v-comment idSufix="ideaShortcutsGuide"/>
