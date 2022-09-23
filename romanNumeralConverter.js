function unitsToRoman(unit) {
  switch (unit) {
    case 0:
      return "";
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    default:
      return undefined;
  }
}

function tensToRoman(ten) {
  switch (ten) {
    case 0:
      return "";
    case 1:
      return "X";
    case 2:
      return "XX";
    case 3:
      return "XXX";
    case 4:
      return "XL";
    case 5:
      return "L";
    case 6:
      return "LX";
    case 7:
      return "LXX";
    case 8:
      return "LXXX";
    case 9:
      return "XC";
    default:
      return undefined;
  }
}

function hundredsToRoman(hundred) {
  switch (hundred) {
    case 0:
      return "";
    case 1:
      return "C";
    case 2:
      return "CC";
    case 3:
      return "CCC";
    case 4:
      return "CD";
    case 5:
      return "D";
    case 6:
      return "DC";
    case 7:
      return "DCC";
    case 8:
      return "DCCC";
    case 9:
      return "CM";
    default:
      return undefined;
  }
}

function thousandsToRoman(thousand) {
  switch (thousand) {
    case 0:
      return "0";
    case 1:
      return "M";
    case 2:
      return "MM";
    case 3:
      return "MMM";
    case 4:
      return "MMMM";
    case 5:
      return "MMMMM";
    case 6:
      return "MMMMMM";
    case 7:
      return "MMMMMMM";
    case 8:
      return "MMMMMMMM";
    case 9:
      return "MMMMMMMMM";
    default:
      return undefined;
  }
}
function convertToRoman(num) {
  return ("" + num)
    .split("")
    .reverse()
    .map((element) => parseInt(element))
    .map((element, index) => {
      if (index === 0) {
        return unitsToRoman(element);
      } else if (index === 1) {
        return tensToRoman(element);
      } else if (index === 2) {
        return hundredsToRoman(element);
      } else if (index === 3) {
        return thousandsToRoman(element);
      }
    })
    .reverse()
    .join("");
}
