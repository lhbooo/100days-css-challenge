const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(`${message}`)
const successLog = message => console.log(`${message}`)
const errorLog = error => console.log(`${error}`)
// 导入模板
const {
    jsxTemplate,
    scssTemplate
} = require('./template.js')
// 生成文件
const generateFile = (path, data) => {
    if (fs.existsSync(path)) {
        errorLog(`${path}文件已存在`)
        return
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if (err) {
                errorLog(err.message)
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}
log('输入要生成的页面组件名称、会生成在 challenge目录下')
let componentName = ''
process.stdin.on('data', async chunk => {
    // 组件名称
    const inputName = String(chunk).trim().toString()
    // Vue页面组件路径 可根据实际情况修改
    const componentPath = resolve('../src/challenge', 'day' + inputName)
    // vue文件
    const jsxFile = resolve(componentPath, 'index.jsx')
    // 入口文件
    const scssFile = resolve(componentPath, 'index.scss')
    // 判断组件文件夹是否存在
    const hasComponentExists = fs.existsSync(componentPath)
    if (hasComponentExists) {
        errorLog(`${inputName}组件已存在，请重新输入`)
        return
    } else {
        log(`正在生成Days目录 ${componentPath}`)
        await dotExistDirectoryCreate(componentPath)
    }
    try {
        // 获取组件名
        if (inputName.includes('/')) {
            const inputArr = inputName.split('/')
            componentName = inputArr[inputArr.length - 1]
        } else {
            componentName = inputName
        }
        log(`正在生成 jsx 文件 ${jsxFile}`)
        await generateFile(jsxFile, jsxTemplate(componentName))
        log(`正在生成 scss 文件 ${scssFile}`)
        await generateFile(scssFile, scssTemplate(componentName))
        successLog('生成成功')
    } catch (e) {
        errorLog(e.message)
    }

    process.stdin.emit('end')
})
process.stdin.on('end', () => {
    log('exit')
    process.exit()
})

function dotExistDirectoryCreate(directory) {
    return new Promise((resolve) => {
        mkdirs(directory, function() {
            resolve(true)
        })
    })
}
// 递归创建目录
function mkdirs(directory, callback) {
    var exists = fs.existsSync(directory)
    if (exists) {
        callback()
    } else {
        mkdirs(path.dirname(directory), function() {
            fs.mkdirSync(directory)
            callback()
        })
    }
}