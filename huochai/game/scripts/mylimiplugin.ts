import * as fs from 'fs';
import * as path from 'path';

export class LimiCustomPlugin implements plugins.Command {
    constructor() {
    }

    async onFile(file: plugins.File) {
        return file;
    }

    async onFinish(commandContext: plugins.CommandContext) {
        let sgameFile = commandContext.projectRoot + 'scripts/bricks/main.js';
        let tgameFile = '../project5_client5.x_bricks/PublicBrickEngineGame/Res/main.js';
        let rStream  = fs.createReadStream(sgameFile);
        let wStream = fs.createWriteStream(tgameFile);
        rStream.pipe(wStream);

        //拷贝平台js
        let sFile = commandContext.projectRoot + 'scripts/bricks/limi.js';
        let tFile = '../project5_client5.x_bricks/PublicBrickEngineGame/Res/limi.js';
        let readStream = fs.createReadStream(sFile);
        let writeStream = fs.createWriteStream(tFile);
        readStream.pipe(writeStream);

        //main.js添加global.Main = Main;
        let mainFile = "../project5_client5.x_bricks/PublicBrickEngineGame/Res/js/main.js";
        let mainstr = fs.readFileSync(mainFile, { encoding: "utf8" });
        mainstr += "global.Main = Main;"
        fs.writeFileSync(mainFile, mainstr);

        //删除资源文件
        let rmdir: string = '../project5_client5.x_bricks/PublicBrickEngineGame/Res/resource/'
        this.removeDir(rmdir);
    }

    private removeDir(dir: string): void {
        if (fs.existsSync(dir)) {
            var flist = fs.readdirSync(dir);
            for (var i = 0; i < flist.length; i++) {
                var filePath = dir + "/" + flist[i];
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