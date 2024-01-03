import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import HistorySample from "./HistorySample";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";

// 하나의 컴포넌트를 생성(재사용하기 위해)

// styled-components => js파일과 css파일 관리!!
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
    color: red;
`;

const Header = () => {
    return (
        <div>
            <StyledHeaderDiv backgroundColor="blue">
                <ul>
                    <li>
                        <StyledHeadLink to={"/"}>홈</StyledHeadLink>
                    </li>
                    <li>
                        <StyledHeadLink to="/login/10">로그인</StyledHeadLink> {/* path를 중괄호로 안감싸도 됨. */}
                    </li>
                    <HistorySample/>
                </ul>
            </StyledHeaderDiv>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                    <Link to="/" className="navbar-brand">REACT</Link>
                    <Nav className="me-auto">
                        {/*<Nav.Link href="/">Home</Nav.Link>*/}
                        {/*<Nav.Link href="/login">Login</Nav.Link>*/}
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/login/:id" className="nav-link">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;