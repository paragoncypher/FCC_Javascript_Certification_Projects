const alpha = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function rot13(str) {
  let accumulator = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isALetter = alpha.includes(char);
    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alpha.findIndex((c) => c === char);
      accumulator += alpha[charIndex + 13] || alpha[charIndex - 13];
    }
  }
  return accumulator;
}

rot13("SERR PBQR PNZC");
