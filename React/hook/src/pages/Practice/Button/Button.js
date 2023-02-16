import { useState } from "react";
import Button2 from "./Button2";

function Button() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "박선영",
        },
        {
            id: 2,
            name: "조아연",
        },
        {
            id: 3,
            name: "김태기",
        },
        {
            id: 4,
            name: "김민식",
        },
    ]);

    const theEnd = (id) => {
        const b = list.filter((member) => member.id !== id);
        setList(b);
    };
    return <Button2 theEnd={theEnd} list={list} />;
}
export default Button;
