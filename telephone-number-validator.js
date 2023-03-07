function telephoneCheck(str) {
  const validFormats = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /1\(\d{3}\)\d{3}-\d{4}/
  ];
  return validFormats.some((format) => format.test(str));
}

telephoneCheck("555-555-5555");
