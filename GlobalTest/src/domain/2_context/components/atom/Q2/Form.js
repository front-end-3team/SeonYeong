import ContextQ2Form2 from "./Form2";
// import { myContext } from "../../../../../store/3_context";

const ContextQ2Form = () => {
    // const useMyContext = useContext(myContext);

    const onClickSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const nickName = e.target.nick.value;
    };
    return (
        <form onSubmit={onClickSubmit}>
            <h1>Q2Form</h1>
            <input name="name" placeholder="name" />
            <input name="nick" placeholder="nick-name" />
            <button type="submit">추가</button>
            <ContextQ2Form2 />
        </form>
    );
};
export default ContextQ2Form;
