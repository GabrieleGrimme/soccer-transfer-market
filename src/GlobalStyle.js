import { createGlobalStyle } from 'styled-components';
import  Soccerfieldimg  from '../src/images/soccerfield.png';


export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

body {
    
    background-image: url(${Soccerfieldimg});
    font-size: 16px;
    font-family: sans-serif;
  }

  h1 {
      text-align: center;
  }
  `;