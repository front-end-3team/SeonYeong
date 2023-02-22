import { useState } from "react";
import styled from "styled-components";

function Comment({ onRemoveBtn, list, post }) {
    const [onEdit, setOnEdit] = useState(false);
    const [onEditContent, setOnEditContent] = useState("");

    // 댓글 수정 기능
    const onEditBtn = (list) => {
        setOnEdit((prev) => !prev);
        const newPost = { ...post };
        const comment = newPost.Comments.find((comment) => comment.id === list.id);
        comment.content = onEditContent;
    };

    // 댓글 수정 실시간 인풋값
    const onChangeEdit = (e) => {
        setOnEditContent(e.target.value);
    };

    return (
        <S.CommentItem>
            <>
                <p>
                    작성자: <span>{list.User.nickname}</span>
                </p>

                <p>
                    댓글 내용:
                    {onEdit ? (
                        <>
                            <input onChange={onChangeEdit} />
                        </>
                    ) : (
                        <span>{list.content}</span>
                    )}
                </p>
                {list.myComment === true ? (
                    <>
                        {onEdit ? (
                            <button onClick={() => onEditBtn(list)}>수정완료</button>
                        ) : (
                            <button onClick={() => onEditBtn(list)}>수정</button>
                        )}
                        <button onClick={() => onRemoveBtn(list)}>삭제</button>
                    </>
                ) : (
                    ""
                )}
            </>
        </S.CommentItem>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
`;

const S = {
    CommentItem,
};
