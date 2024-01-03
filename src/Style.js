import React from 'react';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function Style() {
    return (
        <div>
            <Header/>
            <Routes>
                {/*<Route path="/" exact={true} component={HomePage}/>*/}
                {/*<Route path="/login" exact={true} component={LoginPage}/>*/}
                <Route path="/" element={<HomePage />} />
                <Route path="/login/:userid" element={<LoginPage />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default Style;