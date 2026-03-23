@echo off



egret publish --target wxgame

cp .\scripts\wxgame\game.js ..\game_wxgame\game.js

cp .\scripts\wxgame\game.json ..\game_wxgame\game.json

echo 启动完成
pause
sleep 300