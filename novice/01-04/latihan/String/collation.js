const names = ['Hochberg', 'Hönigswald', 'Holzman'];
 
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
 

console.log(names.sort(germanPhonebook.compare).join(', '));
