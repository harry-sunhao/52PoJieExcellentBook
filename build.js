const asar = require('asar');
const fs = require('fs');
(async () => {
    /**
     * 文件夹删除
     * @param {string} path 需要删除的目录
     */
    const deleteFolder = path => {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(file => {
                var curPath = path + '\\' + file;
                if (fs.statSync(curPath).isDirectory()) {
                    // recurse
                    deleteFolder(curPath);
                } else {
                    // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };
    /**
     * 文件夹复制
     * @param {string} source 源文件夹
     * @param {string} destination 目标文件夹
     */
    function cpSync(source, destination) {
        /** 主要版本 */
        const major = process.version.match(/v([0-9]*).([0-9]*)/)[1];
        /** 特性版本 */
        const minor = process.version.match(/v([0-9]*).([0-9]*)/)[2];

        if (fs.lstatSync(source).isFile()) {
            fs.copyFileSync(source, destination);
            return;
        }
        // 判断node版本不是16.7.0以上的版本
        // 则进入兼容处理
        // 这样处理是因为16.7.0的版本支持了直接复制文件夹的操作
        if (Number(major) < 16 || (Number(major) == 16 && Number(minor) < 7)) {
            // 如果存在文件夹 先递归删除该文件夹
            if (fs.existsSync(destination)) deleteFolder(destination);
            // 新建文件夹 递归新建
            fs.mkdirSync(destination, { recursive: true });
            // 读取源文件夹
            const rd = fs.readdirSync(source);
            for (const fd of rd) {
                // 循环拼接源文件夹/文件全名称
                const sourceFullName = source + '/' + fd;
                // 循环拼接目标文件夹/文件全名称
                const destFullName = destination + '/' + fd;
                // 读取文件信息
                const lstatRes = fs.lstatSync(sourceFullName);
                // 是否是文件
                if (lstatRes.isFile())
                    fs.copyFileSync(sourceFullName, destFullName);
                // 是否是文件夹
                if (lstatRes.isDirectory())
                    cpSync(sourceFullName, destFullName);
            }
        } else fs.cpSync(source, destination, { force: true, recursive: true });
    }

    if (fs.existsSync('./dist')) {
        deleteFolder('./dist');
    }
    // 复制需要打包的文件
    ['html', 'image', 'script', 'style', 'thread', 'index.html'].map(path =>
        cpSync('./' + path, './dist/resource/' + path)
    );
    const src = './dist/resource/';
    const dest = './dist/app.asar';
    await asar.createPackage(src, dest);
    deleteFolder(src);
    console.log('done.');
})();
