import { useEffect, useState } from "react";

function UseEffect() {
    const [name, setName] = useState();
    const [count, setCount] = useState();

    return (
        <>
            <p>text 입력</p>
            <input type="text" placeholder="text" />
            <button onClick={() => setCount(count + 1)}></button>
        </>
    );
}
export default UseEffect;
