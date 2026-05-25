@echo off
cd /d "c:\Users\Gabri\OneDrive\Desktop\Codigo biblioteca front end"

echo === GIT LOG ===
git log --oneline -5
echo.

echo === GIT STATUS ===
git status --short
echo.

echo === STAGING CHANGES ===
git add -A
echo Files staged.
echo.

echo === COMMIT ===
git commit -m "Refactor: Clean up project structure and fix navigation links" -m "- Remove duplicate HTML/CSS files from root directory (moved to .gitignore)
- Fix relative paths in all navigation links (/ to ./)
- Update layout.js with correct page references
- Fix dashboard quick links
- Correct start.html button links
- Consolidate documentation in README.md
- Remove unnecessary files: CHECKLIST.md, SETUP.md, START.txt
- Project now uses clean structure: root only has index.html, README.md, .gitignore
- All application files organized in /public/ directory
- Navigation between pages now works correctly"

echo.
echo === FINAL STATUS ===
git log --oneline -1
git status
echo.
echo === READY TO PUSH ===
echo Run: git push origin main
pause
