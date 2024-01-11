import React from 'react';
import "../../App4_redux.css"
import {useSelector} from "react-redux";
import store from "../../store";

const Top = () => {
    // const number = useSelector((store) => store.number)
    // const username = useSelector((store) => store.username)
    const {number, username} = useSelector((store) => store);

    return (
        <div className="sub_container">
            <h1>Top</h1>
            번호 : {number} / 이름 : {username}
        </div>
    );
};

export default Top;