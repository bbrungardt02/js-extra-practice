// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(str1, str2, str3, str4) {
  let mnemonic = "";
  // check each string and make sure its a string
  if (typeof str1 === "string") {
    const firstletter = str1[0];
    mnemonic += firstletter;
  }
  if (typeof str2 === "string") {
    const firstletter = str2[0];
    mnemonic += firstletter;
  }
  if (typeof str3 === "string") {
    const firstletter = str3[0];
    mnemonic += firstletter;
  }
  if (typeof str4 === "string") {
    const firstletter = str4[0];
    mnemonic += firstletter;
  }

  return mnemonic.toUpperCase();
}
// Do not change the code below this line
module.exports = { myMnemonic };
