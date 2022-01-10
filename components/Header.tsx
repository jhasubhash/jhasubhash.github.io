import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import styled from "styled-components"
import { lighten, darken } from 'polished'
import { CgDarkMode } from 'react-icons/cg';

const HeaderContainer = styled.div`
    overflow: auto;
    display: flex;
    justify-content: center;
    & > * {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const HeaderLink =  styled.div`
    cursor: pointer;
`;


function Header(props) {
    const router = useRouter();
    return <header>
        <HeaderContainer>
        <Link href='/'>
            <a className={router.pathname != "/" ? "linkinactive" : ""}> Home</a>
        </Link>
        <Link href='/projects'>
            <a className={router.pathname != "/projects" ? "linkinactive" : ""}>Projects</a>
        </Link>
        <Link href='/blog'>
            <a className={router.pathname != "/blog" ? "linkinactive" : ""}>Blog</a>
        </Link>
        <Link href='/'>
            <a className={router.pathname != "/contact" ? "linkinactive" : ""}> Contact</a>
        </Link>
        <a style={{position:'absolute', right:'0.5rem', top:'0.5rem'}} onClick={props.toggleTheme}><CgDarkMode/></a>
        </HeaderContainer>
    </header>;
}

export default Header;