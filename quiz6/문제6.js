/* [뽑기 기계] 
뽑기는 300원, 500원 두가지가 있다. 
300원은 상품 1개, 500원은 상품 2개가 랜덤으로 나온다.
상품값 보다 더 많은 코인을 넣으면 잔돈이 반환된다.
그리고 상품값 보다 적은 돈을 넣으면 잔액이 부족 하다고 나온다

함수명은 game이고, 파라미터로 coin, choice를 받는다.
*/

function changes(coin, choice) {
  return coin - choice;
}

function game(coin, choice) {
  let item = {
    1: "iphone",
    2: "ipad",
    3: "airpot",
    4: "notebook",
    5: "watch",
  };
  let rand1 = Math.floor(Math.random() * 5) + 1;
  let rand2 = Math.floor(Math.random() * 5) + 1;

  let a = item[rand1];
  let b = item[rand2];
  let change = changes(coin, choice);

  if (coin >= choice && choice === 300) return console.log(`잔돈 : ${change}, 상품 : ${a}`);
  if (coin >= choice && choice === 500)
    return console.log(`잔돈 : ${change}, 상품1 : ${a}, 상품2 : ${b}`);
  if (coin < 500) return console.log("잔액이 부족합니다");
}
game(600, 500);
