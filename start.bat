@echo off
cd /d "%~dp0"
echo Starting Raahi...
echo.
npm start
if errorlevel 1 (
  echo.
  echo npm failed. Make sure Node.js is installed from https://nodejs.org
  echo Restart Cursor/terminal after installing, then run this again.
)
pause
