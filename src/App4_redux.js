import React, {useState} from 'react';
import "./App4_redux.css"
import Top from "./components/redux/Top";
import Bottom from "./components/redux/Bottom";

function App4_redux() {
    return (
        <div className="container">
            <h1>최상단화면</h1>
            <Top />
            <Bottom />
        </div>
    )
}

export default App4_redux;