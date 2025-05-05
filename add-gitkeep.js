// add-gitkeep.js
const fs = require('fs');
const path = require('path');

function addGitkeepToEmptyDirs(dir) {
  const files = fs.readdirSync(dir);
  
  // Check if directory is empty (no files, only directories allowed)
  const hasFiles = files.some(file => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isFile();
  });
  
  // If directory has no files, add .gitkeep
  if (files.length === 0 || !hasFiles) {
    const gitkeepPath = path.join(dir, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
      fs.writeFileSync(gitkeepPath, '# This file is used to keep the directory in git\n');
      console.log(`Created .gitkeep in ${dir}`);
    }
  }
  
  // Recursively process subdirectories
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      addGitkeepToEmptyDirs(filePath);
    }
  });
}

// Start from src directory
addGitkeepToEmptyDirs('./src');
console.log('Finished adding .gitkeep files');
