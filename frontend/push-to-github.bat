@echo off
echo ========================================
echo   Myntra Clone - GitHub Push Script
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo.
)

REM Check git config
echo Checking Git configuration...
git config user.name >nul 2>&1
if errorlevel 1 (
    echo Please configure Git first:
    echo git config --global user.name "Your Name"
    echo git config --global user.email "your-email@gmail.com"
    pause
    exit /b
)

echo.
echo Current status:
git status
echo.

REM Add all files
echo Adding all files...
git add .
echo.

REM Commit
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update: Code improvements and bug fixes

echo Committing changes...
git commit -m "%commit_msg%"
echo.

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo No remote repository configured!
    echo.
    echo Please create a repository on GitHub first, then run:
    echo git remote add origin https://github.com/YOUR_USERNAME/myntra-clone.git
    echo git branch -M main
    echo git push -u origin main
    echo.
    pause
    exit /b
)

REM Push to GitHub
echo Pushing to GitHub...
git push
echo.

if errorlevel 1 (
    echo.
    echo Push failed! You might need to pull first:
    echo git pull origin main --rebase
    echo.
    pause
    exit /b
)

echo ========================================
echo   Successfully pushed to GitHub!
echo ========================================
echo.
pause
