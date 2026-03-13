@echo off
echo Building for GitHub Pages deployment...

cd frontend
call npm install
call npm run build

echo.
echo Build complete! Ready for GitHub Pages deployment.
echo.
echo To deploy:
echo 1. Push your code to GitHub
echo 2. Go to Settings ^> Pages in your GitHub repo
echo 3. Select 'Deploy from a branch'
echo 4. Choose 'gh-pages' branch
echo.
echo Or use: npm run deploy

pause