@echo off
echo =============================================
echo  Briany's Cleaning Services - Project Setup
echo =============================================
echo.

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
)

echo.
echo [2/3] Copying logo to public/images...
echo.
echo  IMPORTANT: You need to manually copy the logo files:
echo  - Copy your logo PNG to: public\images\logo.png
echo  - The no-background version should be named: logo.png
echo.

echo [3/3] Setup complete!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
pause
