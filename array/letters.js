var anyLetter = [];
function add(letter) {
  anyLetter.push(letter);
}
add("J");
add("o");
add("J");
add("o");
function convertStr(anyLetter, item) {
  return anyLetter + item;
}
var converted = anyLetter.reduce(convertStr);
console.log(converted);
