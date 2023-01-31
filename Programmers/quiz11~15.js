// 문제 설명

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    if (s.length % 2 === 1) return s[parseInt(s.length / 2)];
    if (s.length % 2 === 0) return s[parseInt(s.length / 2 - 1)] + s[parseInt(s.length / 2)];
}

// 문제 설명

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수,
// solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
    let a = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            a += "수";
        } else if (i % 2 === 0) {
            a += "박";
        }
    }
    return a;
}

// 문제 설명

// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
//a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항

// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

function solution(a, b) {
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        n += a[i] * b[i];
    }
    return n;
}

// 문제 설명

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항

// str은 길이 1 이상인 문자열입니다.

function solution(s) {
    let a = Array.from(s);
    let b = a.sort().reverse().join("");
    return b;
}

// 문제 설명

// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
    let a = 0;
    let total = 0;
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                a++;
            }
        }
        if (a % 2 === 0) {
            total += i;
        } else {
            total -= i;
        }
        a = 0;
    }
    return total;
}
