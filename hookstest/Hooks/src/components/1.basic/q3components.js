import { useEffect } from "react";

function Q3components({ setCount }) {
    useEffect(() => {
        const jumpRope = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 2000);
        return () => {
            clearInterval(jumpRope);
            setCount(0);
        };
    }, []);

    return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
