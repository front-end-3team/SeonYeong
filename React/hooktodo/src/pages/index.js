import Sign from "./Form/SignUp/Sign";
import Login from "./Form/Login/Login";
import { useState } from "react";

function LoginIndex() {
    const [form, setForm] = useState("LOGIN");

    const onSubmit = (e) => {
        setForm(e.target.innerText);
    };
    return (
        <div>
            <button onClick={onSubmit}>LOGIN</button>
            <button onClick={onSubmit}>SIGN UP</button>
            {form === "LOGIN" ? <Login /> : <Sign />}
        </div>
    );
}
export default LoginIndex;
