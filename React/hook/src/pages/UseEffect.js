import { useEffect, useState } from "react";

function UseEffect() {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    const randSetName = (e) => setName(e.target.value);

    useEffect(() => {
        console.log("랜더링");
        console.log({ name, count });
    }, [name, count]);

    return (
        <>
            <p>text 입력</p>
            <input type="text" value={name} onChange={randSetName} />
            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count + 1)}>+1 클릭</button>
            <button onClick={() => setCount(count - 1)}>-1 클릭</button>
        </>
    );
}
export default UseEffect;
