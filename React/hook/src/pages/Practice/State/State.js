import { useState } from "react";
import State2 from "./State2";

function State() {
    const [onButton, setOnButton] = useState(true);

    const onClick = () => {
        setOnButton(!onButton);
    };

    return (
        <>
            <button onClick={onClick}>보여줘라</button>
            {onButton ? "" : <State2 />}
        </>
    );
}
export default State;
