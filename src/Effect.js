import React, {useEffect, useState} from 'react';

function Effect() {
    const [data, setData] = useState(0);
    const [search, setSearch] = useState(0);
    const download = () => {
        // 다운로드 받고 (통신)
        let downloadData = 5; // 가정
        setData(downloadData);
    }

    // 실행시점
    // (1) App() 그림이 최초 그려질 때
    // (2) 상태변수가 변경될 때
    // (3) 의존리스트 관리를 할 수 있다

    useEffect(() => {
        console.log("useEffect 실행됨");
        download();
    }, [search]);

    return (
        <div>
            <button onClick={() => {setSearch(2)}}>검색하기</button>
            <h1>데이터: {data}</h1>
            <button onClick={() => {setData(data + 1)}}>더하기</button>
        </div>
    );
}
export default Effect;