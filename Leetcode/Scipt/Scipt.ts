const fs = require('fs');
const path = require('path');

const directoryPath = './Leetcode'; // Specify your directory path here


function toNormalCase(filename) {
  return filename
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function processFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err);
      return;
    }

    files.forEach(file => {
      const oldFilePath = path.join(directory, file);
      const fileNameWithoutExt = path.parse(file).name;
      const newFileName = `${fileNameWithoutExt}.ts`;
      const newFilePath = path.join(directory, newFileName);

      // Rename the file to .ts extension
      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.error('Unable to rename file:', err);
          return;
        }

        const folderName = toNormalCase(fileNameWithoutExt);
        const folderPath = path.join(directory, folderName);

        // Create the new folder
        fs.mkdir(folderPath, { recursive: true }, (err) => {
          if (err) {
            console.error('Unable to create directory:', err);
            return;
          }

          // Move the .ts file into the new folder
          const finalFilePath = path.join(folderPath, newFileName);
          fs.rename(newFilePath, finalFilePath, (err) => {
            if (err) {
              console.error('Unable to move file:', err);
              return;
            }
            console.log(`Moved file: ${newFilePath} -> ${finalFilePath}`);

            // Create the test file in the new folder
            const testFilePath = path.join(folderPath, `${fileNameWithoutExt}.test.ts`);
            const testFileContent = `// ${fileNameWithoutExt} test file`;
            fs.writeFile(testFilePath, testFileContent, 'utf8', (err) => {
              if (err) {
                console.error('Unable to create test file:', err);
                return;
              }
              console.log(`Created test file: ${testFilePath}`);
            });
          });
        });
      });
    });
  });
}

processFiles(directoryPath);
