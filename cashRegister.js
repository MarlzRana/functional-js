function checkCashRegister(price, cash, cid) {
  const changeToBeTendered = cash - price;
  if (changeToBeTendered < 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  const arrChangeToBeTenderedBrokenDown = cid
    .reduce(
      (arr, coinAndAmount, index, arrCID) =>
        cidReducer(arr, coinAndAmount, index, arrCID, changeToBeTendered),
      []
    )
    .filter((element) => element[1]);
  if (arrChangeToBeTenderedBrokenDown.length === 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  const arrChangeToBeTenderedBrokenAsc = arrChangeToBeTenderedBrokenDown.reduce(
    (accArr, element, index, actualArray) => [
      ...accArr,
      actualArray[actualArray.length - 1 - index],
    ],
    []
  );
  const cidWithoutEmptyDraws = cid.filter((element) => element[1]);
  if (
    cidWithoutEmptyDraws.every(
      (element, index) =>
        element[0] === arrChangeToBeTenderedBrokenAsc[index][0] &&
        element[1] === arrChangeToBeTenderedBrokenAsc[index][1]
    )
  ) {
    return { status: "CLOSED", change: cid };
  }
  return { status: "OPEN", change: arrChangeToBeTenderedBrokenDown };
}

function cidReducer(arrBrokenDownChange, coinAndAmount, index, arrCID, change) {
  const [typeOfCoin, dollarValueOfCoinRemaining] =
    arrCID[arrCID.length - 1 - index];
  const dollarValueOfCoin = typeOfCoinToValue(typeOfCoin);
  const changeRemainingToTender = calculateChangeLeftToTender(
    arrBrokenDownChange,
    change
  );
  const numberOfCoinsNeeded = Math.floor(
    changeRemainingToTender / dollarValueOfCoin
  );
  const numberOfCoinsYouHave = Math.floor(
    dollarValueOfCoinRemaining / dollarValueOfCoin
  );
  if (typeOfCoin === "PENNY" && numberOfCoinsNeeded > numberOfCoinsYouHave) {
    return [];
  }
  if (numberOfCoinsNeeded > numberOfCoinsYouHave) {
    return arrBrokenDownChange.concat([
      [typeOfCoin, dollarValueOfCoinRemaining],
    ]);
  }
  return arrBrokenDownChange.concat([
    [typeOfCoin, numberOfCoinsNeeded * dollarValueOfCoin],
  ]);
}

function calculateChangeLeftToTender(arrBrokenDownChange, change) {
  return (
    change - arrBrokenDownChange.reduce((acc, element) => acc + element[1], 0)
  ).toFixed(2);
}

function typeOfCoinToValue(typeOfCoin) {
  switch (typeOfCoin) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "ONE HUNDRED":
      return 100;
    default:
      return undefined;
  }
}
