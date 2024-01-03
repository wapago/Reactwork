import React, {useEffect, useState} from 'react';
import Home from "../components/home/Home";

const HomePage = () => {

    // http요청(jquery ajax, fetch, axios(다운받아야 함))
    const [boards, setBoards] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    // 빈 배열 의존성 -> 한번만 실행
    useEffect(() => {
        // 다운로드한다고 가정 -> fetch, axios, ajax()
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ];

        setBoards([...data]);
        setUser({id:1, username:"ssar"});
    }, []);

    return (
        <div>
            <Home boards={boards} setBoards={setBoards}
                  number={number} setNumber={setNumber}
                  user={user}/>
        </div>
    );
};

export default HomePage;