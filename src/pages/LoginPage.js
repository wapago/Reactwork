import React from 'react';
import Login from "../components/login/Login";
import {useParams} from "react-router-dom";

const LoginPage = () => {
    const {userid} = useParams();
    console.log(userid);

    return (
        <Login/>
    );
};

export default LoginPage;