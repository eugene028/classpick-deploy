import styled from "styled-components";
import { MdClose } from 'react-icons/md';
import { css } from "styled-components";
import { ReactNode } from "react";
import { HTMLAttributes } from "react";

export interface DefaultModalProps extends HTMLAttributes<HTMLDivElement>{
    open: boolean;
    children: ReactNode;
    onDismiss: () => void;
}

export const DefaultModal = ({
    children,
    onDismiss,
    open,
}: DefaultModalProps) => {
    return (
        <Background open={open}>
            <Overlay onClick ={onDismiss}/>
            <ModalWrapper>
                <MdClose size={'1.5rem'}onClick ={onDismiss} style={{cursor:'pointer', right:'22px', position:'absolute'}}/>
                {children}
            </ModalWrapper>
        </Background>
    )
}
const Background = styled.div<{open: boolean}>`
    @keyframes fade {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }
    animation: 0.1s forwards fade ease-out;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:120;
    ${({open}) => (!open && css`
        display: none;
    `)}
`
const Overlay = styled.div`
    background-color:rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
`

const ModalWrapper = styled.div`
    width: 360px;
    min-height: 150px;
    padding: 27px 21px;
    background-color : #fff;
    z-index: 2;
    border-radius:10px;
    position: relative;
    @keyframes fadeIn {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1);
        }
    }
    animation: 0.15s forwards fadeIn ease-out;
`