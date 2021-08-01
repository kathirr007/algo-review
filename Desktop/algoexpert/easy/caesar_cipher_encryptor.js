// 6/2/21
// Time: O(n) | Space: O(1)
function caesarCipherEncryptor(string, key) {
  let res = "";
  for (const char of string) {
    const charVal = char.charCodeAt(0) - 96;
    const newCharVal = (charVal + key) % 26;
    const newChar =
      newCharVal === 0 ? "z" : String.fromCharCode(newCharVal + 96);
    res += newChar;
  }
  return res;
}

const test = {
  string: "zxcvefvzsdxsdxf",
  key: 2,
};
const res = caesarCipherEncryptor(test.string, test.key);
console.log(res);
