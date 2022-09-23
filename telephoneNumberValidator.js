function telephoneCheck(str) {
  const usPhoneNumberRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}(-|\s)?\d{4}$/g;
  return Boolean(str.match(usPhoneNumberRegex));
}
