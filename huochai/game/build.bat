@echo off
setlocal EnableExtensions
cd /d "%~dp0"

call egret publish --target wxgame
if errorlevel 1 goto :fail

if not exist "..\game_wxgame\" mkdir "..\game_wxgame"

xcopy /Y ".\scripts\wxgame\game.js" "..\game_wxgame\game.js"
if errorlevel 1 goto :fail

xcopy /Y ".\scripts\wxgame\game.json" "..\game_wxgame\game.json"
if errorlevel 1 goto :fail

echo 发布完成
pause
goto :eof

:fail
echo.
echo 命令执行失败，错误代码: %errorlevel%
pause
exit /b %errorlevel%
