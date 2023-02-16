import { useState } from "react";
// import Sign from "../SignUp/Sign";

function Login() {
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");

    const onEmailLogin = (el) => {
        el.preventDefault();
        setIsEmail(el.target.value);
    };

    const onPasswordLogin = (el) => {
        el.preventDefault();
        setIsPassword(el.target.value);
    };

    if (onEmailLogin === "test@test.com" && onPasswordLogin === "test1234") return alert("ok");
    // if (onEmailLogin !== "test@test.com" && onPasswordLogin !== "test1234") return alert("no");
    return (
        <>
            <input type="text" placeholder="login" onChange={onEmailLogin} />
            <input type="password" placeholder="password" onChange={onPasswordLogin} />
            <button>로그인</button>
        </>
    );
}
export default Login;
