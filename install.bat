@echo off
cd /d "%~dp0"
echo Installing dependencies for Raahi...
echo.
npm install
if errorlevel 1 (
  echo.
  echo Installation failed. Install Node.js from https://nodejs.org (LTS)
  echo then run this script again.
) else (
  echo.
  echo Done. Run start.bat to start the app.
)
pause
