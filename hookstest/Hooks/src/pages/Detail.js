import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useNavigate } from "react-router-dom";

function DetailPage() {
    const params = useParams();
    const { productNumber } = params;

    const [state, setState] = useState(productList.products);
    const [products, setProducts] = useState(
        state.find((el) => el.productNumber === productNumber)
    );
    // input Ref
    const reviewerInput = useRef();
    const reviewInput = useRef();
    const ratingInput = useRef();

    const navigate = useNavigate();
    useEffect(() => {
        if (!products) {
            navigate("/state");
        }
    }, []);

    // 리뷰 추가 버튼
    const onAddReviewBtn = () => {
        const newContent = { ...products };
        const newAddContent = {
            reviewer: reviewerInput.current.value,
            review: reviewInput.current.value,
            rating: ratingInput.current.value,
        };
        newContent.Review.push(newAddContent);
        setProducts(newContent);
        console.log(products);
    };

    return (
        <div>
            {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
            {/* {params.productNumber} */}
            <p>상품번호: {products.productNumber} </p>
            <p>평점: {products.productRating}</p>
            <p>리뷰 개수: {products.Review.length} </p>

            <div>
                <input ref={reviewerInput} placeholder="이름" />
                <input ref={reviewInput} placeholder="느낌평" />
                <input ref={ratingInput} placeholder="점수" />
                <button onClick={onAddReviewBtn}>작성 완료</button>
            </div>

            <hr />
            {products.Review.map((el) => (
                <>
                    <p>이름 : {el.reviewer}</p>
                    <p>느낌평 : {el.review}</p>
                    <p>점수 : {el.rating}</p>
                    <hr />
                </>
            ))}
        </div>
    );
}
export default DetailPage;
