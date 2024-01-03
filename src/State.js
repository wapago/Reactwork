import {useState} from "react";

function State() {
    console.log("App 실행");

    let sample = [
        {id: 1, name: "홍길동"},
        {id: 2, name: "임꺽정"},
        {id: 3, name: "장보고"},
        {id: 4, name: "코스"}
    ];

    const [users, setUsers] = useState(sample);
    const [num, setNum] = useState(5);

    const download = () => {
        // 기존 데이터 세팅
        setUsers([...sample, {id:num, name:"조자룡"}]);
        setNum(num + 1);
    }

    // 렌더링 시점 = 상태값 변경
    return (
        <div>
            <button onClick={download}>다운로드</button>
            {users.map(u => <h1>{u.id}, {u.name}</h1>)}
        </div>
    );
}

export default State;