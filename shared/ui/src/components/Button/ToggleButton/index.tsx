import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    toggle: boolean;
    btnLabel: [string, string];
    onToggleClick: () => void;
}
/**
 * @param toggle 현재 toggle의 상태
 * @param btnLabel toggleBtn에 사용할 label [왼쪽, 오른쪽]
 * @param onToggleClick toggle을 클릭했을 때의 상황
 */

export const ToggleButton = ({
    toggle = true,
    btnLabel = ['3학년', '전체'],
    onToggleClick = (() => (console.log('임시'))),
 
}: ToggleButtonProps) => {
    const [selected, setClick] = useState<boolean>(toggle);
    const handleonClick = () => {
        setClick(!selected);
        onToggleClick();
    };
   return (
    <Wrapper>
        <FirstBtn onClick={handleonClick} selected={selected} >
            {btnLabel[0]}
        </FirstBtn>
        <SecondBtn onClick={handleonClick} selected={!selected}>
            {btnLabel[1]}
        </SecondBtn>
    </Wrapper>
   )
}

const Wrapper = styled.div`
    width: '100px';
    height: '30px';
    display: flex;
    flex-direction: row;
    align-items: center;
`
const FirstBtn = styled.button<{selected: boolean}>`
    ${({ theme }) => theme.typo.Caption3_2};
    background-color: ${({selected, theme}) => selected ? `${theme.palette.black}` : `${theme.palette.white}`};
    color: ${({selected, theme}) => selected ? `${theme.palette.white}` : `${theme.palette.black_400}`};
    padding: '5px 10px';
    width: 50px;
    height: 30px;
    border-radius: 8px 0px 0px 8px;
    border: 1px solid ${({theme}) => theme.palette.black_400};
`
const SecondBtn = styled.button<{selected: boolean}>`
    ${({ theme }) => theme.typo.Caption3_2};
    background-color: ${({selected, theme}) => selected ? `${theme.palette.black}` : `${theme.palette.white}`};
    color: ${({selected, theme}) => selected ? `${theme.palette.white}` : `${theme.palette.black_400}`};
    padding: '5px 10px';
    width: 50px;
    height: 30px;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid ${({theme}) => theme.palette.black_400};
`