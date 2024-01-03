import React from 'react';
import styled from "styled-components";
import { Button } from "react-bootstrap";

// 부모로부터 받아온 데이터를 가지고 스타일링을 동적으로 한다면?

const StyledDeleteButton = styled.button`
    color: ${(props) => props.user.username === "ssar" ? "blue" : "red"};
`;
const StyledAddButton = styled(StyledDeleteButton)`
    background-color: green`;

const Home = (props) => {
    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props;

    return (
        <div>
            <Button variant="primary">Primary</Button>{' '}
            <StyledAddButton user={user}>ssar?</StyledAddButton>
            <h1>홈: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>클릭할때마다 번호 증가</button>
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>
                전체삭제
            </StyledDeleteButton>
            {boards.map(
                (board) => <h3>제목: {board.title} 내용: {board.content}</h3>
            )}
        </div>
    );
};

export default Home;