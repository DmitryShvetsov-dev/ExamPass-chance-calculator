/*
╔═══╗         ╔═══╦╗ 
║╔══╝         ║╔═╗║║
║╚══╦╗╔╦══╦╗╔╗║║ ╚╣╚═╦══╦═╗╔══╦══╗
║╔══╩╬╬╣╔╗║╚╝║║║ ╔╣╔╗║╔╗║╔╗╣╔═╣║═╣
║╚══╦╬╬╣╔╗║║║║║╚═╝║║║║╔╗║║║║╚═╣║═╣
╚═══╩╝╚╩╝╚╩╩╩╝╚═══╩╝╚╩╝╚╩╝╚╩══╩══╝
*/
function count() {
  let answerValue = answerCreation();
  if (answerValue > 100) {
    answerValue = 100;
  }
  let answer = document.getElementById("answer");
  answer.innerHTML = `${answerValue}%`;
}

function factorial(number) {
  let a = 1;
  for (let i = 2; i <= number; i++) {
    a = a * i;
  }
  return a;
}
function combinations(k, n) {
  if (n >= k) {
    return Math.trunc(factorial(n) / (factorial(k) * factorial(n - k)));
  } else {
    return 0;
  }
}
function answerCreation() {
  //valuesArray[0] сколько всего вопросов
  //valuesArray[1] сколько ты знаешь
  //valuesArray[2] сколько надо
  //valuesArray[3] из скольких
  let favorableOutcomes = 0n;
  let idArray = ["HMQ", "HMUK", "inputWithMargin", "ofInput"];
  let valuesArray = [];
  for (let i = 0; i < 4; i++) {
    a = document.getElementById(idArray[i]).value;
    b = BigInt(a);
    valuesArray[i] = b;
  }
  let allOutcomes = BigInt(combinations(valuesArray[3], valuesArray[0]));
  let badQuestions = BigInt(valuesArray[0] - valuesArray[1]);
  typeof favorableOutcomes;
  typeof allOutcomes;
  typeof badQuestions;
  for (let i = BigInt(valuesArray[2]); i <= valuesArray[3]; i++) {
    favorableOutcomes =
      favorableOutcomes +
      BigInt(combinations(i, valuesArray[1])) *
        BigInt(combinations(valuesArray[3] - i, badQuestions));
    console.log(
      `при k = ${i} будет столько благоприятных исходов ${favorableOutcomes}`
    );
  }

  return (favorableOutcomes * 100n) / allOutcomes;
}
