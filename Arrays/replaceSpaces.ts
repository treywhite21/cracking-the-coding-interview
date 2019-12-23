const replaceSpaces = str => str.replace(new RegExp(' ', 'g'), '%20');

console.log(replaceSpaces('This is a test.'));
console.log(replaceSpaces(' Test two '));
console.log(replaceSpaces('   '));