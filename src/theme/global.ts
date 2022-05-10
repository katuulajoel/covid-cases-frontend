import { createGlobalStyle, withTheme } from "styled-components";
import { CTheme } from "./themes";

type GlobalThemeProps = {
  theme: CTheme;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.palette.background.default};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.palette.text.primary};
  }

`;

export default withTheme(globalStyle);
