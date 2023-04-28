// 문제 설명

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항

// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

function solution(s) {
  let regex = /[^0-9]/g;
  let result = s.replace(regex, "");
  if (s.length !== 4 && s.length != 6) return false;
  if (result === s) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

// 문제 설명

// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
// 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항

// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

function solution(price, money, count) {
  let a = 0;
  for (let i = 1; i <= count; i++) {
    a += i * price;
  }

  if (a > money) {
    answer = a - money;
  } else {
    answer = 0;
  }
  return answer;
}

// 문제 설명

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건

// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
  let z = [];
  for (let a = 0; a < arr1.length; a++) {
    let p = [];
    for (let b = 0; b < arr1[a].length; b++) {
      p.push(arr1[a][b] + arr2[a][b]);
    }
    z.push(p);
  }
  return z;
}

// 문제 설명

// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항

// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

function solution(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      a.push(arr[i]);
    }
  }
  return a;
}

// 문제 설명

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항

// 두 수는 1이상 1000000이하의 자연수입니다.

/*

n	m	return
3	12	[3, 12]
2	5	[1, 10]

*/

function solution(n, m) {
  let a = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      a = i;
    }
  }
  let b = (n * m) / a;
  return [a, b];
}
