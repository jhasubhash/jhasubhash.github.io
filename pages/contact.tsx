import Head from 'next/head';
import styled from "styled-components"


const ContactDiv = styled.div`
    padding-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
`;

function Contact() {
    return <>
    <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactDiv>
        <h3>Contact Me</h3>
        <p>Please drop an email at <a href='mailto:contact@subhashjha.in' style={{color:'#0070f3'}}>contact@subhashjha.in</a> for any work releated query or to just say 
        <span style={{fontFamily: 'cursive', fontSize:'1.5rem', paddingLeft:'0.5rem'}}>Hi</span>.</p>
        <p>If you like my work and feel like supporting it</p>
        <a href="https://www.buymeacoffee.com/subhashjha" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: '60px', width: '217px'}} /></a>
      </ContactDiv>
      </>;
}

export default Contact;