// concept from https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 85%;
   bottom: 28%;
   height: 20px;
   font-size: 4rem;
   z-index: 1;
   cursor: pointer;
   color: rgb(128,128,128);
   opacity: 0.4
`;

export const Background = styled.div`
   background: 'linear-gradient(to bottom, #808080 0%, #FFFFFF 100%);
`