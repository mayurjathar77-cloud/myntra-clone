@echo off
echo Cleaning up project structure...

REM Remove unnecessary documentation files from frontend
cd frontend
if exist "BACKEND_SETUP.md" del "BACKEND_SETUP.md"
if exist "CHECKLIST.md" del "CHECKLIST.md"
if exist "COMMANDS.txt" del "COMMANDS.txt"
if exist "COMPLETE_FEATURES_SUMMARY.md" del "COMPLETE_FEATURES_SUMMARY.md"
if exist "EASY_EMAIL_SETUP.md" del "EASY_EMAIL_SETUP.md"
if exist "EMAIL_SETUP_GUIDE.md" del "EMAIL_SETUP_GUIDE.md"
if exist "GITHUB_GUIDE.md" del "GITHUB_GUIDE.md"
if exist "ORDERS_EMAIL_GUIDE.md" del "ORDERS_EMAIL_GUIDE.md"
if exist "PAYMENT_GUIDE.md" del "PAYMENT_GUIDE.md"
if exist "PROJECT_SUMMARY.md" del "PROJECT_SUMMARY.md"
if exist "PUSH_COMMANDS.md" del "PUSH_COMMANDS.md"
if exist "push-to-github.bat" del "push-to-github.bat"
if exist "QUICKSTART.md" del "QUICKSTART.md"
if exist "backend-package.json" del "backend-package.json"
if exist "README.md" del "README.md"

REM Remove .vercel folder
if exist ".vercel" rmdir /s /q ".vercel"

cd ..

REM Remove root level unnecessary files
if exist "DEPLOY_TO_GITHUB.md" del "DEPLOY_TO_GITHUB.md"
if exist "deploy-to-github.bat" del "deploy-to-github.bat"
if exist "GITHUB_COMMANDS.txt" del "GITHUB_COMMANDS.txt"
if exist "PAYMENT_SETUP.md" del "PAYMENT_SETUP.md"

echo Cleanup complete!
pause