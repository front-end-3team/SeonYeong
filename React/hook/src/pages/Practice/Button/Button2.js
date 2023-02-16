function Button2({ list, theEnd }) {
    return list.map((members) => (
        <div>
            {members.id}번 {members.name}
            <button onClick={() => theEnd(members.id)}>퇴근~</button>
        </div>
    ));
}
export default Button2;
