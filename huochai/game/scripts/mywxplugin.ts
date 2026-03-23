import * as fs from 'fs';
import * as path from 'path';

export class WxCustomPlugin implements plugins.Command {
    constructor() {
    }

    async onFile(file: plugins.File) {
        if (file.extname == '.js') {
            if (file.origin == 'main.js') {
                console.log(file.path);
                let content = file.contents.toString();
                let addStr = '';

                let classList: string[] = this.getNs1ClassName(['./resource/eui_skins/']);
                for (let i = 0; i < classList.length; i++) {
                    let cname = classList[i];
                    if (cname != "skinName") {
                        addStr += 'window["' + cname + '"]' + ' = ' + cname + ';';
                    }
                }

                content += addStr;
                file.contents = new Buffer(content);
            }
            // else if (file.origin == "libs/modules/jszip/jszip.js" || file.origin == "libs/modules/jszip/jszip.min.js") {
            //     //替换jszip
            //     let sfile = "..\\extends\\libs_wx\\jszip\\bin\\jszip\\jszip.min.js";
            //     let filestr: string = fs.readFileSync(sfile, 'utf-8');
            //     file.contents = new Buffer(filestr);
            // }
            // else if (file.origin == "libs/modules/md5/md5.js" || file.origin == "libs/modules/md5/md5.min.js") {
            //     //替换jszip
            //     let sfile = "..\\extends\\libs_wx\\md5\\bin\\md5\\md5.min.js";
            //     let filestr: string = fs.readFileSync(sfile, 'utf-8');
            //     file.contents = new Buffer(filestr);
            // }
        }

        return file;
    }

    async onFinish(commandContext: plugins.CommandContext) {
        //替换game.js
        // let gamejsFile: string = '../project4_client_5.1_wxgame/game.js';
        // let filestr: string = fs.readFileSync(gamejsFile, 'utf-8');
        // if (filestr.indexOf('window.pfDoCommand') == -1) {
        //     let str: string = "window.pfDoCommand=(require('./wxxyx.js')).pfDoCommand;\n\negret.runEgret";
        //     filestr = filestr.replace('egret.runEgret', str);
        //     fs.writeFileSync(gamejsFile, filestr, 'utf-8');
        // }
        // let sgameFile = commandContext.projectRoot + 'scripts/wxgame/game.js';
        // let tgameFile = '../project5_client5.x_wxgame/game.js';
        // this.copyFile(sgameFile, tgameFile);

        //拷贝平台js
        // let sFile = commandContext.projectRoot + 'scripts/wxgame/mdxyx.js';
        // let tFile = '../project5_client5.x_wxgame/mdxyx.js';
        // this.copyFile(sFile, tFile);

        //删除资源文件
        // let rmdir: string = '..\\project5_client_5.x_wxgame\\resource'
        // this.removeDir(rmdir);
    }

    private copyFile(sFile, tFile) {
        let readStream = fs.createReadStream(sFile);
        let writeStream = fs.createWriteStream(tFile);
        readStream.pipe(writeStream);
        readStream.close();
        writeStream.close();
    }

    //设置分包
    private setSubPacket(perojectDir) {
        let tDir = '..\\project5_client5.x_wxgame\\';
        let gameFiles = ['jszip.min.js', 'md5.min.js', 'protobuf-library.min.js', 'protobuf-bundles.min.js', 'default.thm.js', 'main.min.js'];
        //拷贝游戏相关js到分包
        let stageDir = tDir + "stage1\\";
        if (!fs.existsSync(stageDir)) {
            fs.mkdirSync(stageDir);
        }

        let jsDir = tDir + "js\\";
        let fileList = fs.readdirSync(jsDir);
        fileList.forEach((fileName) => {
            if (gameFiles.indexOf(fileName) != -1) {
                //拷贝到subdir
                this.copyFile(jsDir + fileName, stageDir + fileName);
                fs.unlinkSync(jsDir + fileName);
            }
        })

        //拷贝game.js
        this.copyFile(perojectDir + 'scripts/wxgame/game.js', tDir + "game.js");
        this.copyFile(perojectDir + 'scripts/wxgame/game.json', tDir + "game.json");
        this.copyFile(perojectDir + 'scripts/wxgame/mdxyx.js', tDir + "mdxyx.js");
        this.copyFile(perojectDir + 'scripts/wxgame/manifest.js', tDir + "manifest.js");
        this.copyFile(perojectDir + 'scripts/wxgame/subgame.js', stageDir + "game.js");

        //拷贝初始资源
        let resDir = tDir + "resource\\";
        if (!fs.existsSync(resDir)) {
            fs.mkdirSync(resDir);
        }

        this.copyFile(perojectDir + 'resource/accredit.png', resDir + "accredit.png");
    }

    private getNs1ClassName(dirs: string[]): string[] {
        let classList: string[] = [];
        for (let i = 0; i < dirs.length; i++) {
            let dir = dirs[i];
            let fileList = fs.readdirSync(dir);
            fileList.forEach((fileName) => {
                let filePath: string = path.join(dir, fileName);
                let fileStr = fs.readFileSync(filePath, 'utf-8');
                let list = this.findClassName(fileStr, /ns1:(\w+)/g);
                for (var i = 0; i < list.length; i++) {
                    let cname = list[i];
                    if (classList.indexOf(cname) == -1) {
                        classList.push(cname);
                    }
                }
            })
        }

        return classList;
    }

    private findClassName(str: string, r: RegExp): string[] {
        let classList = [];
        let match = r.exec(str);
        while (match) {
            classList.push(match[1]);
            match = r.exec(str);
        }

        return classList;
    }

    private removeDir(dir: string): void {
        if (fs.existsSync(dir)) {
            var flist = fs.readdirSync(dir);
            for (var i = 0; i < flist.length; i++) {
                var filePath = dir + "\\" + flist[i];
                if (fs.statSync(filePath).isDirectory()) {
                    this.removeDir(filePath);
                }
                else {
                    fs.unlinkSync(filePath);
                }
            }
            // if (fs.readdirSync(dir).length == 0) {
            //     fs.rmdirSync(dir);
            //     console.log('rmdir: ' + dir);
            // }
        }
    }
}