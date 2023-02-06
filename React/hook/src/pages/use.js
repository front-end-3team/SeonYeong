import { useRef, useState } from "react";
import styled from "styled-components";

function Use() {
    const [count, setCount] = useState(0);
    const color = useRef();

    const plusClick = () => {
        setCount(count + 1);
    };
    const minusClick = () => {
        setCount(count - 1);
    };
    if (count > 0) {
        color.current.style.color = "red";
    }
    if (count < 0) {
        color.current.style.color = "green";
    }

    return (
        <>
            <h2>플러스 버튼을 누르면 빨강(양수일 때), 마이너스 버튼을 누르면 초록(음수일 때)</h2>

            <Box>
                <button onClick={plusClick}>+</button>
                <div ref={color}>{count} </div>
                <button onClick={minusClick}>-</button>
            </Box>
        </>
    );
}

const Box = styled.div`
    display: flex;

    button {
        font-size: 30px;
    }
    div {
        font-size: 30px;
    }
`;

export default Use;
