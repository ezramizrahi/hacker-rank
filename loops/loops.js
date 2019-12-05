/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowelSet = new Set(['a','e','i','o','u']);
    let stringArr = [...s];
    stringArr.forEach(function(str) {
        vowelSet.has(str) ? console.log(str) : '';
    });
  
    stringArr.forEach(function(str) {
        !vowelSet.has(str) ? console.log(str) : '';
    });

}
