import { ButtonHTMLAttributes } from "react";
import { KeyOfColor, KeyOfTypo } from "../../../theme";
import styled from "styled-components";
export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: KeyOfColor;
    typo?: KeyOfTypo;
    onClickEvent?: () => void;
}

export const TextButton = ({
    children, 
    color ='black_500', 
    onClickEvent,
    typo ='Caption3_2_1'}: TextButtonProps) => {
    return (
        <Wrapper onClick ={onClickEvent} typo ={typo} color ={color}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button<{color: KeyOfColor, typo: KeyOfTypo}>`
     ${({ typo, theme }) => theme.typo[typo]}
     color: ${({ theme, color }) => theme.palette[color]};
    cursor: pointer;
`