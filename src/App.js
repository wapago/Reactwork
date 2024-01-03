import logo from './logo.svg';
import './App.css';

// 0. React 엔진-데이터변경감지해서 UI 그려줌!!
// 1. 실행방식 (index.html) - SPA
// 2. JSX 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다(하나의 태그만)
// (2) 변수선언은 let 혹은 const로만 해야 함.
// (3) if사용 불가능 / 삼항연산자(조건 ? 값(true일때) : 값(false일때))가능
// (4) 조건부 렌더링 -> (조건 && 값(true일때))
// (5) css디자인
//  - 내부에 적는 방법
//  - 외부 파일에 적는 방법
//  - 라이브러리 사용(component-styled)

let a = 10;
const b = 20; // 상수
function App() {
    // undefined도 하나의 값이다.
    let c;
    let d = undefined;
    console.log(1, c, d);

    let list = [1, 2, 3, 4];

    const mystyle = {
        color: "red",
    };

    return (
        <div>
            <div style={mystyle}>안녕 {a === 10 ? "10입니다." : "10이 아닙니다."}</div>
            <h1 className="box-style">헤딩태그 {b === 10 && "10입니다."}</h1>
            <div>{list.map(n => <h1>{n}</h1>)}</div>
            {/*<div>{list.forEach(n => <h1>{n}</h1>)}</div>*/}
        </div>

    );
}

export default App;
