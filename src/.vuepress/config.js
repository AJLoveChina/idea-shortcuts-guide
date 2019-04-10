let path = require("path");
let assetsPath = path.resolve(__dirname, '../assets');

module.exports = {
    title: 'IntelliJ IDEA 快捷键速查文档',
    description: 'IntelliJ IDEA快捷键文档，idea快捷键速查手册，idea快捷键大全，idea摆脱鼠标快捷键，idea keys map',
    base: '/idea/',
    dest: path.resolve(__dirname, "../../idea"),
    head: [
      ['link', {rel : 'shortcut icon', type: "image/x-icon", href: '/nigeerhuox16.ico'}]
    ],
    ga: "UA-70087663-3",
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': assetsPath
            }
        }
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        nav: [
            { text: 'Github', link: 'https://github.com/AJLoveChina/idea-shortcuts-guide' },
        ],
        repo: "https://github.com/AJLoveChina/idea-shortcuts-guide",
        repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'src',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        // 默认为 "Edit this page"
        editLinkText: '在 Github 上编辑此页',
        editLinks: true,
        lastUpdated: "最近一次更新时间",
        sidebar: [
            ["/", "首页"],
            ['/avoid-mouse/', '摆脱鼠标'],
            ['/ctrl/', 'Ctrl 快捷键'],
            ['/alt/', 'Alt 快捷键'],
            ['/shift/', 'Shift 快捷键'],
            ['/ctrlAlt/', 'Ctrl + Alt 快捷键'],
            ['/ctrlShift/', 'Ctrl + Shift 快捷键'],
            ['/altShift/', 'Alt + Shift 快捷键'],
            ['/cas/', 'Ctrl + Alt + Shift 快捷键'],
            ['/ot/', '其它快捷键'],
            ['/modify/', '修改快捷键设置'],
        ]
    }
};
