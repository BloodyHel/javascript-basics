export const getNthElement = (index, array) => {
  
return array[index % array.length];

};

export const arrayToCSVString = (array) => {


  return array.toString();

};

export const csvStringToArray = (string) => {

  return string.split(',');

};

export const addToArray = (array, element) => {
  array.push(element);

};

export const addToArray2 = (array, element) => {
  return array.concat(element);
  

};

export const removeNthElement = (array, index) => {
 
array.splice(index, 1);
};

export const numbersToStrings = (numbers) => {
return numbers.map(function(number){return number.toString();})
};

export const uppercaseWordsInArray = (strings) => {
return strings.map(function(string){return string.toUpperCase();})
};

export const reverseWordsInArray = (strings) => {
  return strings.map(function(string){return string.split("").reverse().join("");})
};

export const onlyEven = (numbers) => {
  return numbers.filter(function(number){return number % 2 === 0;})
};

export const removeNthElement2 = (index, array) => {
	return array.filter(function(item, location) {
        if (location !== index) return item;
    });
};

export const elementsStartingWithAVowel = (strings) => {
return strings.filter((string) => {return /^[aeiou]/.test(string.toLowerCase());
});
};

export const removeSpaces = (string) => {
return string.split('').filter((character) => {return character !== ' ';
}).join('');
};

export const sumNumbers = (numbers) => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
};

export const sortByLastLetter = (strings) => {
  return strings.sort((a, ) => {
    return a.charAt(a.length - 1) > b.charAt(b.length - 1) ? 1 : -1
  });
};
