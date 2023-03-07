function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regex, '');
  let length = str.length;
  for (var i = 0; i <length/2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");
