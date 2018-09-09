var namerator = require('./namerator');

const nouns = process.argv.slice(2);
if (nouns.length === 0) {
  console.error('Please provide at least one noun');
  process.exit(1);
}

const names = namerator.getNameSuggestions(nouns);

console.log(names.join('\n'));
