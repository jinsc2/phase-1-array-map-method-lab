const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((coin) => {
    const word = coin.split(" ");
    const capitalizeWord = word.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    // return capitalizeWord
    const rejoin = capitalizeWord.join(" ");
    return rejoin;
   
    /*const capitalizedWord = word.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    const rejoin = capitalizedWord.join(" ");
    return rejoin;*/
  });
};