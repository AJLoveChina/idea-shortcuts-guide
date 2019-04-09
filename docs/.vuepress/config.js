let path = require("path");
let assetsPath = path.resolve(__dirname, '../assets');
console.log(assetsPath);

module.exports = {
    title: 'IntelliJ IDEA 快捷键速查文档',
    description: '文档在手,天下我有',
    base: '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': assetsPath
            }
        }
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
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
