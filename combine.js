const { combine } = require('combine-json');
const fs = require('graceful-fs');
const journalDir = 'journal_citations/journals';
const currentDirName = 'journal_citations/journals/a/advances_in_strawberry_production';
const currentFileName = currentDirName + '.json';
const minified = false;
const largeDirs =
  [
  ];

async function getCombinedJSON(jsonDir) {
  return await combine(jsonDir);
}

async function combineDirFiles(dirName, fileName) {
  const combinedJSON = await getCombinedJSON(dirName);

  await fs.appendFile(fileName, JSON.stringify(combinedJSON, null, minified ? 0 : 2), function (err) {
    if (err) {
      throw err
    }
    console.log(`Saved to ${fileName}`)
  });
}

async function checkSubDirItem(subDirItem, subDir) {
  if (largeDirs.includes(subDirItem)) {
    console.log('excluding ' + subDirItem);
  } else {
    const subDirItemPath  = subDir + '/' + subDirItem;

    if (!subDirItem.includes('.json')) {
      const currentDirName = subDirItemPath;
      const currentFileName = currentDirName + '.json';

      console.log('combining files for ' + currentDirName);
      console.log('outputting to ' + currentFileName);
      await combineDirFiles(currentDirName, currentFileName);
    }
  }
}


function checkSubDir(subDir, dir) {
  const subDirPath = dir + '/' + subDir;
  const subDirItems = fs.readdirSync(subDirPath);

  subDirItems.forEach(subDirItem => {
   checkSubDirItem(subDirItem, subDirPath);
  });
}

function checkDirectories() {
  const journalSubDirectories = fs.readdirSync(journalDir);

  journalSubDirectories.forEach(subDirectory => {
    checkSubDir(subDirectory, journalDir);
  });
}

const subDirectory = 'z';

checkSubDir(subDirectory, journalDir);

// checkDirectories();
