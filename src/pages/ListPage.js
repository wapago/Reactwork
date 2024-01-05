import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    align-items: center;
`;


const ListPage = () => {
    const [post, setPost] = useState({
        id:"",
        title:"",
        content:""
    });

    const [posts, setPosts] = useState([
        {id: 1, title: "제목1", content: "내용1"},
        {id: 2, title: "제목2", content: "내용2"},
        {id: 3, title: "제목3", content: "내용3"},
        {id: 4, title: "제목4", content: "내용4"},
        {id: 5, title: "제목5", content: "내용5"},
    ]);

    const handleWrite = () => {
        setPosts([...posts, post]);
    }
    console.log(posts);

    // const handleChangeTitle = (e) => {
    //     console.log(e.target.value);
    //     setPost({title:e.target.value});
    // }
    // const handleChangeContent = (e) => {
    //     console.log(e.target.value);
    //     setPost({content:e.target.value});
    // }

    const handleForm = (e) => {
        // ES6 computed property name : 키 동적 할당
        setPost({...post, [e.target.name] : e.target.value});

        // let val1 = "Heeseung Chae";
        // console.log("my name is " + val1);  // my name is Heeseung Chae
        //
        // let val2 = "Chanho Kim";
        // console.log(`my name is ${val2}`); // my name is Chanho Kim
        //
        // let val3 = "Donghwan Kim";
        // let obj1 = {
        //     name : `${val3}`,
        //     name2 : val2
        // }
        // console.log(obj1);
        //
        //
        // let key1 = "name";
        // let key2 = "age";
        // let age1 = 30;
        // let obj2 = {
        //     // error
        //     // `${key1}` : val1;
        //     [key1] : "Heeseung Chae",
        //     [key1] : val2,
        //     [key2] : age1
        // }
        // console.log(obj2);

    }

    return (
        <div>
            <h1>리스트 페이지</h1>
            <form>
                <input type="text" placeholder="번호를 입력하세요..." value={post.id} onChange={handleForm} name="id"/>
                {/*<input type="text" placeholder="제목을 입력하세요..." value={post.title} onChange={handleChangeTitle}/>*/}
                <input type="text" placeholder="제목을 입력하세요..." value={post.title} onChange={handleForm} name="title"/>
                {/*<input type="text" placeholder="내용을 입력하세요..." value={post.content} onChange={handleChangeContent}/>*/}
                <input type="text" placeholder="내용을 입력하세요..." value={post.content} onChange={handleForm} name="content"/>
                <button type="button" onClick={handleWrite}>글쓰기</button>
            </form>
            <hr/>
            {posts.map((post) =>
                <StyledItemBoxDiv>
                    <div>
                        번호: {post.id} / 제목: {post.title} / 내용: {post.content}
                    </div>
                    <button>삭제</button>
                </StyledItemBoxDiv>
            )};
        </div>
    );
};

export default ListPage;