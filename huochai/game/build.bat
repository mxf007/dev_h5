
@echo off



egret publish --target wxgame && ^
xcopy .\scripts\wxgame\game.js ..\game_wxgame\game.js /y && ^
xcopy .\scripts\wxgame\game.json ..\game_wxgame\game.json /y

if %errorlevel% neq 0 (
    echo 命令执行失败，错误代码: %errorlevel%
    pause
    exit /b %errorlevel%
)

echo 发布完成

echo 启动完成
pause
