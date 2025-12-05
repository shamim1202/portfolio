@echo off
echo ========================================
echo React Portfolio Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Checking installation...
call npm list react react-dom vite

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open: http://localhost:5173
echo.
pause
