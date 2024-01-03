import {useState} from "react";
import Sub from "./Sub";

function App2() {
    // let number = 1;
    const [number, setNumber] = useState(3);

    const add = () => {
        setNumber(number + 1); // 리액트한테 number값 변경할게 라고 요청함
        console.log('add', number);
    }

    return (
        <div>
            <h1>숫자: {number}</h1>
            <button onClick={add}>더하기</button>
            <Sub />
        </div>
    )
}

export default App2;