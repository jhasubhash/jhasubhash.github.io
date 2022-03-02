import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import styled from "styled-components"
import { lighten, darken, opacify, transparentize } from 'polished'
import { CgDarkMode } from 'react-icons/cg';
import { getShadowColor } from '../config/themeConfig';
import { MdClose, MdMenu } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';

const HeaderDiv = styled.div``;

const HeaderContainer = styled.div`
    overflow: auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    @media (max-width: 35em) {
        z-index: 100;
        position: fixed;
        inset: 0 0 0 60%;
        background: ${({ theme }) => transparentize(0.1, theme.body)};
        flex-direction: column;
        justify-content: start;
        padding: 2rem;
        padding-top: 8rem;
        transform: translateX(100%);
        transition: transform 350ms ease-out;
        &[data-visible='true']{
            transform: translateX(0%);
        }
    };
    @supports(backdrop-filter: blur(1rem)){
        background: ${({ theme }) => transparentize(0.8, theme.body)};
        backdrop-filter: blur(1rem);
    }
`;

const HeaderLink =  styled.div`
    cursor: pointer;
`;

const ToggleMode =  styled.a`
    position: absolute;
    right: 0.5rem;
    top:'0.5rem';
    @media (max-width: 35em) {
        position: relative;
        margin: auto;
        margin-bottom: 0;
    }
`;

const ToggleBtn = styled.button`
    color: ${({ theme }) => theme.text};
    display: none;
    position: absolute;
    aspect-ratio : 1;
    top: 2rem;
    right: 2rem;
    z-index: 999;
    background: none;
    border: none;
    @media (max-width: 35em) {
        display: block
    }
`;


function Header(props) {
    const router = useRouter();
    const ref = useRef(null);
    const btnRef = useRef(null);
    const [navVisible, setNavVisible] = useState(false);

    const handleClickOutside = (event) => {
        if(!ref.current.contains(event.target)){
            hideNav();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        }
    }, [handleClickOutside])

    const hideNav = () => {
        ref.current.setAttribute('data-visible', false);
        btnRef.current.setAttribute('aria-expanded', false);
        setNavVisible(false);
    }

    const toggleNav = () => {
        let visible = ref.current.getAttribute('data-visible')
        if(visible == 'false'){
            ref.current.setAttribute('data-visible', true);
            btnRef.current.setAttribute('aria-expanded', true);
            setNavVisible(true);
        }else {
            ref.current.setAttribute('data-visible', false);
            btnRef.current.setAttribute('aria-expanded', false);
            setNavVisible(false);
        }
    }

    return <header>
        <ToggleBtn aria-controls='primary-nav' aria-expanded='false' onClick={toggleNav} ref={btnRef}>{navVisible? <MdClose size={'1.2rem'}/> :<MdMenu size={'1.2rem'}/>}</ToggleBtn>
        <HeaderContainer id="primary-nav" data-visible='false' ref={ref}>
        <Link href='/'>
            <a className={router.pathname != "/" ? "linkinactive" : ""} onClick={hideNav}> Home</a>
        </Link>
        <Link href='/projects'>
            <a className={router.pathname != "/projects" ? "linkinactive" : ""} onClick={hideNav}>Projects</a>
        </Link>
        <Link href='/gallery'>
            <a className={router.pathname != "/gallery" ? "linkinactive" : ""} onClick={hideNav}>Gallery</a>
        </Link>
        <Link href='/blog'>
            <a className={router.pathname != "/blog" ? "linkinactive" : ""} onClick={hideNav}>Blog</a>
        </Link>
        <Link href='/contact'>
            <a className={router.pathname != "/contact" ? "linkinactive" : ""} onClick={hideNav}> Contact</a>
        </Link>
        <ToggleMode onClick={props.toggleTheme}><CgDarkMode/></ToggleMode>
        </HeaderContainer>
    </header>;
}

export default Header;