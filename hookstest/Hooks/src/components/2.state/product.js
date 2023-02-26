import styled from "styled-components";

function ProductCard({ onNavigate, list }) {
    const listPrice = Number(list.productPrice).toLocaleString();

    return (
        <S.Item onClick={onNavigate}>
            <h4>{list.productName}</h4>
            <p>상품번호: {list.productNumber}</p>
            <p>가격: {listPrice}원</p>
            <p>사이즈: {list.productSize}</p>
            <p>평점: {list.productRating}</p>
            <p>리뷰: {list.productReview}</p>
        </S.Item>
    );
}
export default ProductCard;

const Item = styled.li`
    border: 1px solid #000;
    cursor: pointer;
    width: 300px;
    margin: 16px auto;
`;

const S = {
    Item,
};
