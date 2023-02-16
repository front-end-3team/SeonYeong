import { useState } from "react";

function InputIndex() {
    const [input, setInput] = useState("");
    const [pwInput, setPwInput] = useState("");

    const onIdChange = (e) => {
        setInput(e.target.value);
    };
    const onPwChange = (e) => {
        setPwInput(e.target.value);
    };

    const onReset = () => {
        setInput(null);
        setPwInput(null);
    };

    return (
        <form>
            <input type="text" placeholder="ID" onChange={onIdChange} />
            <input type="password" placeholder="PW" onChange={onPwChange} />
            <button onClick={onReset}>초기화</button>
            <ul>
                <li>ID : {input}</li>
                <li>PW : {pwInput}</li>
            </ul>
        </form>
    );
}
export default InputIndex;
