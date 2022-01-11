
import styled from "styled-components"

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;


function Footer() {
    return <footer>
      <FooterContainer>
        <a href="/"> © subhashjha.in </a>
      </FooterContainer>
    </footer>;
}

export default Footer;