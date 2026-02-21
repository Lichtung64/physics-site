@echo off
cd /d D:\软件\opencode\physics-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Lichtung64/physics-site.git
git push -u origin main
echo Done!
pause
