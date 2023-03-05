const ReducerQ1List = ({ ingredients, removeBtn }) => {
    return (
        <tbody>
            {ingredients.map((ingredient) => (
                <tr>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.price}</td>
                    <td>
                        <button onClick={() => removeBtn(ingredient)}>삭제</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
export default ReducerQ1List;
