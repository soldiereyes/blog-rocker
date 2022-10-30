import React from "react";
import {
    BodyModal,
    ButtonClose,
    FooterModal,
    InputForm,
    InputFormPost,
    LabelForm,
    ModalBackground,
    ModalContainer,
    SubmitBtn,
    TitleCloseBtn,
    TitleModal
} from "./Modal";
import {MdSend} from "react-icons/md";

const ModalContact = ({closeModal}) => {

    return (
        <ModalBackground>
            <ModalContainer>
                <TitleCloseBtn>
                    <ButtonClose onClick={() => closeModal(false)}> X</ButtonClose>
                </TitleCloseBtn>
                <TitleModal>Contact</TitleModal>
                <BodyModal>
                    <form>
                        <LabelForm>
                            Name:
                            <InputForm type="text"  />
                        </LabelForm>
                    </form>
                    <form>
                        <LabelForm>
                            Email:
                            <InputForm type="text"/>
                        </LabelForm>
                    </form>
                    <form>
                        <LabelForm>
                            Phone:
                            <InputForm  inputMode="tel" />
                        </LabelForm>
                    </form>
                    <form>
                        <LabelForm>
                            Post:
                            <InputFormPost type="text" name="name"/>
                        </LabelForm>
                    </form>

                </BodyModal>
                <FooterModal>
                    <SubmitBtn
                        onClick={() => closeModal(false)}><MdSend/> Submit
                    </SubmitBtn>
                </FooterModal>
            </ModalContainer>
        </ModalBackground>
    );
}
export default ModalContact;