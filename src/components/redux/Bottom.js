import React from 'react';
import "../../App4_redux.css"
import {useDispatch} from "react-redux";
import {decrease, increase} from "../../store";

const Bottom = () => {
    const dispatcher = useDispatch();

    return (
        <div className="sub_container">
            <h1>Bottom</h1>
            {/*<button onClick={dispatcher(increase())}>증가</button>*/}
            <button onClick={() => dispatcher(increase("Kim Dong-hwan"))}>증가</button>
            <button onClick={() => dispatcher(decrease("Chae Hee-seung"))}>감소</button>
        </div>
    );
};

export default Bottom;