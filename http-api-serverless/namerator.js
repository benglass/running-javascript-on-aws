const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
  'black',
  'purple',
];

const adjectives = [
  'attractive',
  'bald',
  'beautiful',
  'chubby',
  'clean',
  'dazzling',
  'drab',
  'elegant',
  'fancy',
  'fit',
  'flabby',
  'glamorous',
  'gorgeous',
  'handsome',
  'long',
  'magnificent',
  'muscular',
  'plain',
  'plump',
  'quaint',
  'scruffy',
  'shapely',
  'short',
  'skinny',
  'stocky',
  'ugly',
  'unkempt',
  'unsightly',
  'able',
];

const startupSuffixes = [
  'ly',
  'ify',
  'ion',
  'ize',
  'io',
  'ster',
  'ter',
  'ler',
  'ite',
  'DB',
  'ii',
  'shot',
  'ic',
  'kick',
  'mix',
  'ous',
  'aculous',
  'ity',
  'ito',
];

function getRandomElement(source) {
  const randomIndex = Math.floor(Math.random() * source.length); 

  return source[randomIndex];
}

function colorStrategy(noun) {
  return `${getRandomElement(colors)} ${noun}`;
}

function adjectiveStrategy(noun) {
  return `${getRandomElement(adjectives)} ${noun}`;
}

function startupifyStrategy(noun) {
  return `${noun}${getRandomElement(startupSuffixes)}`;
}

const strategies = [colorStrategy, adjectiveStrategy, startupifyStrategy];

function getNameSuggestions(nouns, count = 5) {
  const suggestions = [];

  for (let i = 0; i < count; i++) {
    const noun = getRandomElement(nouns);
    const namingStrategy = getRandomElement(strategies);
    suggestions.push(namingStrategy(noun));
  }

  return suggestions;
}

module.exports = {
  getNameSuggestions: getNameSuggestions
};
