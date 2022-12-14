import styled from "styled-components";


export const Background = styled.div`
  padding: 10px;
  font-family: Rubik, sans-serif;
  box-sizing: border-box;
  background: linear-gradient(45deg, rgba(241, 161, 10, 1) 0%, rgba(52, 35, 3, 1) 100%);
  background-size: 500%;
  animation: bg-animation 7s infinite alternate;
  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }

`