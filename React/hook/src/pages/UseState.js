import { useState } from "react";
import styled from "styled-components";

function UseState() {
    const [value, setValue] = useState(0);
    return (
        <Box>
            <p>
                현재 카운터는<span>{value}</span>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </Box>
    );
}
export default UseState;

const Box = styled.div`
    background-color: aqua;
    display: flex;
    justify-content: center;
`;
