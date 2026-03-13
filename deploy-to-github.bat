@echo off
echo ========================================
echo   Myntra Clone - GitHub Deployment
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit: Myntra clone full-stack e-commerce application"

echo.
echo Step 4: Setting main branch...
git branch -M main

echo.
echo Step 5: Adding remote repository...
git remote add origin https://github.com/mayurjathar77-cloud/myntra-clone.git

echo.
echo Step 6: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your project is now live at:
echo https://github.com/mayurjathar77-cloud/myntra-clone
echo.
pause
