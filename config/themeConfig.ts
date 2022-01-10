import { createGlobalStyle} from "styled-components"
import { lighten, darken } from 'polished'

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  type: 'light',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  type: 'dark',
}

export const getShadowColor = (theme, val, clr) => {
    return theme.type == 'dark' ? darken(val, clr) : lighten(val,clr);
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  a {
      color: ${({ theme }) => theme.text};
      cursor: pointer;
  }

  .btn {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => getShadowColor(theme, 0.70, theme.text)};
    border-color: ${({ theme }) => theme.text};
  }

  .linkinactive{
    color: ${({ theme }) => getShadowColor(theme, 0.40, theme.text)};
  }

  .avatar {
      width:auto;
      border-radius:50%;
  }

`