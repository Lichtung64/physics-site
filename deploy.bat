@echo off
cd /d D:\软件\opencode\physics-site
git add .
git commit -m "Add missing article files"
git pull --rebase
git push
echo Done!
pause
