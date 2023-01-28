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

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            total += i;
        }
    }
    return total;
}
