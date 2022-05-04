const { combine } = require('combine-json');
const fs = require('fs');
const fileName = 'journal_citations/journals/a/advances_in_strawberry_production.json';
const minified = false;

const combinedJSON = combine('journal_citations/journals/a/advances_in_strawberry_production');

fs.appendFile(fileName, JSON.stringify(combinedJSON, null, minified ? 0 : 2), function (err) {
  if (err) {
    throw err
  }
  console.log(`Saved to ${fileName}`)
})

