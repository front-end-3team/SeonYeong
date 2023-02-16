function Sign() {
    // 비밀번호 확인폼을 만들어야 한다
    // 이메일,비밀번호, 비밀번호 확인을 할 수 있어야 하니까 그것들을 선언 해줘야 하는데 .. 뭘로 선언을 해줘야 사용할 수 있을까.
    // 만약 칸이 비어 있으면 "정보를 입력해주세요" 라고 출력.
    // 비밀번호와 비밀번호 확인칸의 값이 다르다면 "비밀번호 확인이 일치하지 않습니다" 라고 출력
    // const [{ email, password, passwordConfirm }] = useState();
    return (
        <>
            <input type="text" placeholder="e-mail" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="password-confirm" />
            <button>회원가입</button>
        </>
    );
}
export default Sign;
