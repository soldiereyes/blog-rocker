import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(45, 45, 45, 0.57);
  position: fixed;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-size: 500%;
  box-sizing: border-box;
  margin-top: 0;

`;
export const ModalContainer = styled.div`
  width: 40%;
  height: 80%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.35);
`;
export const TitleModal = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  color: rgba(241, 161, 10, 1);
  font: 700 2.5rem "Rubik", sans-serif;

`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: revert;
`;

export const ButtonClose = styled.button`
  background: transparent;
  color: #2d2d2d;
  border: none;
  font-size: 25px;
  cursor: pointer;
  margin-left: 95%;
`;

export const SubmitBtn = styled.button`
  background: rgb(45, 45, 45);
  border: none;
  width: 30%;
  color: #fff;
  font: 700 1.5rem "Rubik", sans-serif;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  align-items: flex-end;
  z-index: 0;
`;

export const SubmitIcon = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  color: rgb(45, 45, 45);
  font: 700 2.5rem "Rubik", sans-serif;
  z-index: 1;
`;

export const FooterModal = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: -20px;
  color: rgb(45, 45, 45);
  font: 700 2.5rem "Rubik", sans-serif;
  align-items: center;
`;
export const BodyModal = styled.div`
  width: 92%;
  height: 90%;
  background: rgba(45, 45, 45, 0);
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;

`;
export const Form = styled.form`
  padding: 0 30px;
`;


export const LabelForm = styled.label`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  margin: auto;

`;

export const InputForm = styled.input`
 padding: 10px 10px;
 border-style: solid;
 border-color: rgba(45, 45, 45, 0.23);
 border-radius: 4px;
 background: transparent;
 color: #2d2d2d;
 font: 1.5rem "Rubik", sans-serif;
 margin-bottom: 20px;
 width: 100%;

 &:focus {
  outline: none;
 }
`;
export const InputFormPost = styled(InputForm)`
    height: 150px;
 `;